   function login() {
            // Lógica de inicio de sesión
        }

        function goToScreen2() {
            // Ocultar pantalla 1 y mostrar pantalla 2
            document.getElementById('screen1').style.display = 'none';
            document.getElementById('screen2').style.display = 'block';
        }

        function sendRecoveryEmail() {
            // Lógica para enviar el correo de recuperación
        }

        function login() {
    // Lógica de inicio de sesión
    // (Puedes agregar validaciones y autenticación aquí)

    // Después de la lógica de inicio de sesión, redirige a la Pantalla 3
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'none';
    document.getElementById('screen3').style.display = 'block';
}