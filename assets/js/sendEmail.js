

function sendMail(contactForm){

// example copied from email js https://www.emailjs.com/docs/sdk/send/

// template parameters are the {{parameters}} from the email js template in double brackets
    var templateParams = {
        from_name: contactForm.name.value,
        to_name: "Rosie",
        message: contactForm.projectsummary.value,
        reply_to: contactForm.emailaddress.value,
        };


    // first parameter is project name, second template name, thirt is template parameters object (listed  above)
    emailjs.send('fictitious-rosie-resume', 'template_w8ytkqk', templateParams)
        .then(
            // first argument is success
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
        },
            // second argument is error
            function(error) {
                console.log('FAILED...', error);
        });
    return false;
};