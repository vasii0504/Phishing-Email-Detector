document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //  input values
    const emailId = document.getElementById('emailId').value;
    const emailBody = document.getElementById('emailBody').value;
    const emailUrl = document.getElementById('emailUrl').value;
    const emailFiles = document.getElementById('emailFiles').files;

    // Store values in sessionStorage
    sessionStorage.setItem('emailId', emailId);
    sessionStorage.setItem('emailBody', emailBody);
    sessionStorage.setItem('emailUrl', emailUrl);

    // Prepare an array of file names
    const fileNames = Array.from(emailFiles).map(file => file.name);
    sessionStorage.setItem('emailFiles', JSON.stringify(fileNames));

    // Phishing  logic
    const phishingKeywords = ["Urgent","Verify","Password","Account","Suspicious","Update",
                              "Login or Log in","Locked","Secure","Limited Time","Confirm",
                              "Payment","Unauthorized","Billing","Warning","Action Required","Compromised",
                              "Recover","Immediate Attention","Final Notice"];
    
    let isPhishing = phishingKeywords.some(keyword => emailBody.toLowerCase().includes(keyword.toLowerCase()));
    sessionStorage.setItem('isPhishing', isPhishing.toString());

    // Redirect  results page
    window.location.href = 'results.html'; 
});
