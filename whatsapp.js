// whatsapp.js - WhatsApp integration for sending results

/**
 * Send quiz results via WhatsApp using wa.me link
 * @param {Object} results - Quiz results data
 */
function sendResultsViaWhatsApp(results) {
    const { name, phone, score, total, percentage, answers } = results;

    // Generate certificate
    generateCertificate(results);

    // WhatsApp number (Mexican format)
    const whatsappNumber = '528136760495'; // Country code + number

    // Create message
    const message = formatWhatsAppMessage(results);

    // Create wa.me URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

/**
 * Format message for WhatsApp
 * @param {Object} results - Quiz results data
 * @returns {string} Formatted message
 */
function formatWhatsAppMessage(results) {
    const { name, phone, score, total, percentage } = results;

    // Determine performance level
    let performance = '';
    if (percentage >= 90) {
        performance = '🌟 ¡Excelente!';
    } else if (percentage >= 80) {
        performance = '👏 ¡Muy Bien!';
    } else if (percentage >= 70) {
        performance = '👍 Bien';
    } else if (percentage >= 60) {
        performance = '📚 Regular';
    } else {
        performance = '💪 Sigue estudiando';
    }

    const message = `
🔐 *RESULTADOS DEL QUIZ - SEGURIDAD DE SOFTWARE*

*Estudiante:* ${name}
*Teléfono:* ${phone}

📊 *CALIFICACIÓN*
━━━━━━━━━━━━━━━━
✅ Respuestas correctas: ${score}
❌ Respuestas incorrectas: ${total - score}
📈 Porcentaje: ${percentage}%
${performance}

🎯 *Total de preguntas:* ${total}

📱 *Plataforma:* SecureQuiz
🌐 *Proyecto de:* Gabriel Flores - UNIR

_Certificado generado automáticamente._
    `.trim();

    return message;
}

/**
 * Generate certificate using HTML5 Canvas
 * @param {Object} results - Quiz results data
 */
function generateCertificate(results) {
    const { name, score, total, percentage } = results;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(0.5, '#764ba2');
    gradient.addColorStop(1, '#f093fb');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add dark overlay
    ctx.fillStyle = 'rgba(15, 15, 35, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Inner border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICADO DE COMPLETACIÓN', canvas.width / 2, 150);

    // Subtitle
    ctx.font = '32px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('Quiz de Seguridad de Software', canvas.width / 2, 200);

    // Icon
    ctx.font = '100px Arial';
    ctx.fillText('🔐', canvas.width / 2, 300);

    // Student name
    ctx.font = 'bold 48px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(name, canvas.width / 2, 400);

    // Achievement text
    ctx.font = '28px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Ha completado exitosamente el quiz con:', canvas.width / 2, 460);

    // Score
    ctx.font = 'bold 80px Inter, sans-serif';
    const scoreGradient = ctx.createLinearGradient(canvas.width / 2 - 200, 520, canvas.width / 2 + 200, 520);
    scoreGradient.addColorStop(0, '#10b981');
    scoreGradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = scoreGradient;
    ctx.fillText(`${percentage}%`, canvas.width / 2, 560);

    // Details
    ctx.font = '24px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(`${score} de ${total} preguntas correctas`, canvas.width / 2, 610);

    // Date
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.font = '20px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fillText(dateStr, canvas.width / 2, 670);

    // Footer
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('SecureQuiz - Gabriel Flores', canvas.width / 2, 730);

    ctx.font = '18px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('Universidad Internacional de La Rioja (UNIR)', canvas.width / 2, 760);

    // Convert to downloadable image
    try {
        const dataURL = canvas.toDataURL('image/png');

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.download = `Certificado_${name.replace(/\s+/g, '_')}_${Date.now()}.png`;
        downloadLink.href = dataURL;

        // Trigger download
        downloadLink.click();

        console.log('Certificado generado y descargado exitosamente');
    } catch (error) {
        console.error('Error al generar el certificado:', error);
    }
}

/**
 * Share certificate image via WhatsApp (alternative method)
 * Note: Direct image sharing requires server-side implementation
 * This function prepares the data for potential future implementation
 */
function prepareCertificateForSharing(results) {
    // This would require a backend service to:
    // 1. Save the image to a temporary location
    // 2. Get a public URL
    // 3. Share via WhatsApp API

    // For now, we download the certificate and send text results
    console.log('Certificate prepared for download');
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sendResultsViaWhatsApp,
        generateCertificate
    };
}
