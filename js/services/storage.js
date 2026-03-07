/* ═══════════════════════════════════════════════════════════
   STORAGE SERVICE - IAFACIL.HELP
   Operaciones con Supabase Storage (avatares, certificados)
   ═══════════════════════════════════════════════════════════ */

import { supabase } from '../config/supabase.js';
import { APP_CONFIG } from '../config/constants.js';

class StorageService {

    /** Subir avatar del usuario */
    async uploadAvatar(userId, file) {
        this._validateFile(file, ['image/jpeg', 'image/png', 'image/webp']);

        const ext = file.name.split('.').pop();
        const path = `avatars/${userId}.${ext}`;

        const { error } = await supabase.storage
            .from('profiles')
            .upload(path, file, { upsert: true });
        if (error) throw error;

        return this.getPublicUrl('profiles', path);
    }

    /** Obtener URL pública de un archivo */
    getPublicUrl(bucket, path) {
        const { data } = supabase.storage.from(bucket).getPublicUrl(path);
        return data.publicUrl;
    }

    /** Eliminar archivo */
    async deleteFile(bucket, path) {
        const { error } = await supabase.storage.from(bucket).remove([path]);
        if (error) throw error;
    }

    /** Validar archivo antes de subir */
    _validateFile(file, allowedTypes) {
        if (!allowedTypes.includes(file.type)) {
            throw new Error(`Tipo de archivo no permitido. Usa: ${allowedTypes.join(', ')}`);
        }
        if (file.size > APP_CONFIG.MAX_FILE_SIZE) {
            throw new Error(`El archivo es demasiado grande. Máximo: ${APP_CONFIG.MAX_FILE_SIZE / 1024 / 1024}MB`);
        }
    }
}

export const storage = new StorageService();
