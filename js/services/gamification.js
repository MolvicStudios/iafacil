/* ═══════════════════════════════════════════════════════════
   GAMIFICATION SERVICE - IAFACIL.HELP
   Sistema de XP, niveles, rachas, badges y celebraciones
   ═══════════════════════════════════════════════════════════ */

import { LEVELS, XP_REWARDS, STREAK_CONFIG } from '../config/constants.js';
import { db } from './database.js';

class GamificationService {

    /* ─── XP ─── */

    /** Añadir XP al usuario y verificar subida de nivel */
    async addXP(userId, amount, reason = '') {
        const profile = await db.getProfile(userId);
        const oldLevel = this.getLevelFromXP(profile.xp);
        const newXP = profile.xp + amount;
        const newLevel = this.getLevelFromXP(newXP);

        await db.updateProfile(userId, { xp: newXP, level: newLevel.level });

        const result = { xp: newXP, xpAdded: amount, reason };

        // ¿Subió de nivel?
        if (newLevel.level > oldLevel.level) {
            result.levelUp = true;
            result.newLevel = newLevel;
        }

        return result;
    }

    /** Obtener nivel a partir de XP */
    getLevelFromXP(xp) {
        for (let i = LEVELS.length - 1; i >= 0; i--) {
            if (xp >= LEVELS[i].xpMin) return LEVELS[i];
        }
        return LEVELS[0];
    }

    /** Calcular progreso dentro del nivel actual (0-100) */
    getLevelProgress(xp) {
        const level = this.getLevelFromXP(xp);
        if (level.xpMax === Infinity) return 100;
        const range = level.xpMax - level.xpMin;
        const progress = xp - level.xpMin;
        return Math.min(Math.round((progress / range) * 100), 100);
    }

    /* ─── Rachas (Streaks) ─── */

    /** Registrar actividad diaria y actualizar racha */
    async updateStreak(userId) {
        const profile = await db.getProfile(userId);
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        await db.logDailyActivity(userId);

        let streak = profile.streak || 0;
        const lastActive = profile.last_active_date;

        if (lastActive === today) {
            return { streak, isNew: false };
        } else if (lastActive === yesterday) {
            streak += 1;
        } else {
            streak = 1; // Se rompió la racha
        }

        await db.updateProfile(userId, {
            streak,
            last_active_date: today,
            best_streak: Math.max(streak, profile.best_streak || 0)
        });

        // Verificar milestones de racha
        const milestone = STREAK_CONFIG.MILESTONES.find(m => m === streak);
        if (milestone) {
            await this._checkStreakBadge(userId, milestone);
        }

        return { streak, isNew: true };
    }

    /* ─── Badges ─── */

    /** Verificar y otorgar badges según criterios */
    async checkBadges(userId, event, data = {}) {
        const awarded = [];

        switch (event) {
            case 'lesson_complete':
                awarded.push(...await this._checkLessonBadges(userId, data));
                break;
            case 'course_complete':
                awarded.push(...await this._checkCourseBadges(userId, data));
                break;
            case 'quiz_perfect':
                awarded.push(...await this._checkQuizBadges(userId, data));
                break;
            case 'tool_use':
                awarded.push(...await this._checkToolBadges(userId, data));
                break;
        }

        return awarded.filter(Boolean);
    }

    async _checkLessonBadges(userId, data) {
        const progress = await db.getAllProgress(userId);
        const totalLessons = progress.reduce((sum, p) => sum + (p.completed_lessons?.length || 0), 0);

        const badges = [];
        if (totalLessons === 1)  badges.push(await db.awardBadge(userId, 'primera-leccion'));
        if (totalLessons >= 10)  badges.push(await db.awardBadge(userId, 'diez-lecciones'));
        if (totalLessons >= 50)  badges.push(await db.awardBadge(userId, 'cincuenta-lecciones'));
        if (totalLessons >= 100) badges.push(await db.awardBadge(userId, 'cien-lecciones'));

        return badges;
    }

    async _checkCourseBadges(userId, data) {
        const progress = await db.getAllProgress(userId);
        const completed = progress.filter(p => p.completed).length;

        const badges = [];
        if (completed === 1)  badges.push(await db.awardBadge(userId, 'primer-curso'));
        if (completed >= 5)   badges.push(await db.awardBadge(userId, 'cinco-cursos'));
        if (completed >= 15)  badges.push(await db.awardBadge(userId, 'quince-cursos'));
        if (completed >= 25)  badges.push(await db.awardBadge(userId, 'todos-los-cursos'));

        return badges;
    }

    async _checkQuizBadges(userId, data) {
        const badges = [];
        if (data.perfect) badges.push(await db.awardBadge(userId, 'quiz-perfecto'));
        return badges;
    }

    async _checkToolBadges(userId, data) {
        const badges = [];
        badges.push(await db.awardBadge(userId, `tool-${data.toolId}`));
        return badges;
    }

    async _checkStreakBadge(userId, days) {
        const badgeMap = {
            7: 'racha-7',
            30: 'racha-30',
            100: 'racha-100'
        };
        if (badgeMap[days]) {
            await db.awardBadge(userId, badgeMap[days]);
        }
    }

    /* ─── Celebraciones ─── */

    /** Lanzar confetti en la pantalla */
    celebrate() {
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);

        const colors = ['#6C5CE7', '#00D9A5', '#FF6B9D', '#FDCB6E', '#74B9FF', '#A29BFE'];

        for (let i = 0; i < 50; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = `${Math.random() * 1}s`;
            piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
            container.appendChild(piece);
        }

        setTimeout(() => container.remove(), 4000);
    }
}

export const gamification = new GamificationService();
