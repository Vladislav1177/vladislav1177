document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var service = document.getElementById('service').value;

    console.log('Запись на прием:');
    console.log('Имя: ' + name);
    console.log('Email: ' + email);
    console.log('Телефон: ' + phone);
    console.log('Услуга: ' + service);

    alert('Спасибо за запись, ' + name + '! Мы свяжемся с вами для подтверждения.');
});
