document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from sessionStorage
    const emailId = sessionStorage.getItem('emailId');
    const emailBody = sessionStorage.getItem('emailBody');
    const emailUrl = sessionStorage.getItem('emailUrl');
    const emailFiles = JSON.parse(sessionStorage.getItem('emailFiles')) || [];
    const isPhishing = sessionStorage.getItem('isPhishing');

    // Display retrieved data
    document.getElementById('displayEmailId').textContent = emailId || 'No Email ID provided';
    document.getElementById('displayEmailBody').textContent = emailBody || 'No Email Body provided';
    document.getElementById('displayEmailUrl').textContent = emailUrl || 'No URL provided';

    //  file attachments
    const fileList = document.getElementById('displayEmailFiles');
    fileList.innerHTML = ""; 
    if (emailFiles.length > 0) {
        emailFiles.forEach(fileName => {
            const listItem = document.createElement('li');
            listItem.textContent = fileName;
            fileList.appendChild(listItem);
        });
    } else {
        fileList.innerHTML = '<li>No files attached</li>';
    }

    // Display phishing result
    const phishingResult = document.getElementById('phishingResult');
    phishingResult.textContent = (isPhishing === 'true') ? "This email is likely a phishing attempt." : "This email appears to be legitimate.";

    // Handle the "Go Back" button
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});
