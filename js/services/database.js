/* ═══════════════════════════════════════════════════════════
   DATABASE SERVICE - IAFACIL.HELP
   Operaciones con la base de datos Supabase (PostgreSQL)
   ═══════════════════════════════════════════════════════════ */

import { supabase } from '../config/supabase.js';

class DatabaseService {

    /* ─── Perfiles ─── */

    async getProfile(userId) {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();
        if (error) throw error;
        return data;
    }

    async updateProfile(userId, updates) {
        const { data, error } = await supabase
            .from('profiles')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', userId)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    /* ─── Progreso de cursos ─── */

    async getCourseProgress(userId, courseId) {
        const { data, error } = await supabase
            .from('course_progress')
            .select('*')
            .eq('user_id', userId)
            .eq('course_id', courseId)
            .single();
        if (error && error.code !== 'PGRST116') throw error;
        return data;
    }

    async getAllProgress(userId) {
        const { data, error } = await supabase
            .from('course_progress')
            .select('*')
            .eq('user_id', userId);
        if (error) throw error;
        return data || [];
    }

    async updateLessonProgress(userId, courseId, lessonId, completed) {
        // Obtener progreso actual o crear nuevo
        let progress = await this.getCourseProgress(userId, courseId);

        if (!progress) {
            const { data, error } = await supabase
                .from('course_progress')
                .insert({
                    user_id: userId,
                    course_id: courseId,
                    completed_lessons: completed ? [lessonId] : [],
                    started_at: new Date().toISOString()
                })
                .select()
                .single();
            if (error) throw error;
            return data;
        }

        const lessons = progress.completed_lessons || [];
        if (completed && !lessons.includes(lessonId)) {
            lessons.push(lessonId);
        }

        const { data, error } = await supabase
            .from('course_progress')
            .update({
                completed_lessons: lessons,
                updated_at: new Date().toISOString()
            })
            .eq('id', progress.id)
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    /* ─── Quiz resultados ─── */

    async saveQuizResult(userId, courseId, lessonId, score, total) {
        const { data, error } = await supabase
            .from('quiz_results')
            .insert({
                user_id: userId,
                course_id: courseId,
                lesson_id: lessonId,
                score,
                total,
                passed: score >= total * 0.7,
                completed_at: new Date().toISOString()
            })
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    /* ─── Logros / Badges ─── */

    async getUserBadges(userId) {
        const { data, error } = await supabase
            .from('user_badges')
            .select('*')
            .eq('user_id', userId)
            .order('earned_at', { ascending: false });
        if (error) throw error;
        return data || [];
    }

    async awardBadge(userId, badgeId) {
        // Verificar si ya tiene el badge
        const { data: existing } = await supabase
            .from('user_badges')
            .select('id')
            .eq('user_id', userId)
            .eq('badge_id', badgeId)
            .single();

        if (existing) return null; // Ya lo tiene

        const { data, error } = await supabase
            .from('user_badges')
            .insert({
                user_id: userId,
                badge_id: badgeId,
                earned_at: new Date().toISOString()
            })
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    /* ─── Actividad diaria (streaks) ─── */

    async logDailyActivity(userId) {
        const today = new Date().toISOString().split('T')[0];

        const { data: existing } = await supabase
            .from('daily_activity')
            .select('id')
            .eq('user_id', userId)
            .eq('date', today)
            .single();

        if (existing) return existing;

        const { data, error } = await supabase
            .from('daily_activity')
            .insert({
                user_id: userId,
                date: today
            })
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async getActivityDates(userId, days = 30) {
        const since = new Date();
        since.setDate(since.getDate() - days);

        const { data, error } = await supabase
            .from('daily_activity')
            .select('date')
            .eq('user_id', userId)
            .gte('date', since.toISOString().split('T')[0])
            .order('date', { ascending: true });
        if (error) throw error;
        return (data || []).map(d => d.date);
    }

    /* ─── Prompts guardados ─── */

    async savePrompt(userId, prompt) {
        const { data, error } = await supabase
            .from('saved_prompts')
            .insert({
                user_id: userId,
                ...prompt,
                created_at: new Date().toISOString()
            })
            .select()
            .single();
        if (error) throw error;
        return data;
    }

    async getSavedPrompts(userId) {
        const { data, error } = await supabase
            .from('saved_prompts')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data || [];
    }

    async deletePrompt(promptId, userId) {
        const { error } = await supabase
            .from('saved_prompts')
            .delete()
            .eq('id', promptId)
            .eq('user_id', userId);
        if (error) throw error;
    }
}

export const db = new DatabaseService();
