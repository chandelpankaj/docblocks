/**
 * create a new document
 * @param {org.docblocks.document.CreateDocument} documentData
 * @transaction
 */

 
function CreateDocument(documentData) {
     
    // get asset registry
    return getAssetRegistry('org.docblocks.document.Document')
    .then(function (documentRegistry){
        var factory = getFactory();
      
      	return getParticipantRegistry('org.docblocks.participant.Student')
        .then(function (participantRegistry) {

          return participantRegistry.exists(documentData.participantKey);
        })
        .then(function (exists) {
            if(!exists) throw new Error("Student with id: " + documentData.participantKey + " do not exist");
            
            var documentId = documentData.documentId;
            var NS = 'org.docblocks.document';
            var document = factory.newResource(NS, 'Document', documentId);
            
            // set the attributes of document
            document.documentHash = documentData.documentHash;
            
            // set the institute attribute on the document
            var currentParticipant = getCurrentParticipant();
            var issuerInstitute = currentParticipant.institute;
            document.institute = issuerInstitute;

            // set the student
            var relationship = factory.newRelationship('org.docblocks.participant', 'Student', documentData.participantKey);
            document.student = relationship;

            // add to registry
            return documentRegistry.add(document);
          
        })
    });
 }


 /**
 * create a new issuer
 * @param {org.docblocks.participant.CreateCertificateIssuer} participantData
 * @transaction
 */

 
function CreateCertificateIssuer(participantData) {
     
    // get participant registry
    return getParticipantRegistry('org.docblocks.participant.CertificateIssuer')
    .then(function (certificateIssuerRegistry){
        var factory = getFactory();
      
        var certificateIssuerId = participantData.participantKey;
        var NS = 'org.docblocks.participant';
        var certificateIssuer = factory.newResource(NS, 'CertificateIssuer', certificateIssuerId);
          
        // set the attributes of certificate issuer
        var contact = factory.newConcept(NS,"Contact");
        contact.fName = participantData.contact.fName;
        contact.lName = participantData.contact.lName;
        contact.email = participantData.contact.email;
        contact.mobile = participantData.contact.mobile;

        certificateIssuer.contact = contact;

        var currentParticipant = getCurrentParticipant();
        var adminInstitute = currentParticipant.institute;
        certificateIssuer.institute = adminInstitute;


        // add to registry
        return certificateIssuerRegistry.add(certificateIssuer);
    });
 }



 /**
 * create a new authenticator
 * @param {org.docblocks.participant.CreateAuthenticator} participantData
 * @transaction
 */

 
function CreateAuthenticator(participantData) {
     
    // get participant registry
    return getParticipantRegistry('org.docblocks.participant.Authenticator')
    .then(function (authenticatorRegistry){
        var factory = getFactory();
      
        var authenticatorId = participantData.participantKey;
        var NS = 'org.docblocks.participant';
        var authenticator = factory.newResource(NS, 'Authenticator', authenticatorId);
          
        // set the attributes of authenticator
        var contact = factory.newConcept(NS,"Contact");
        contact.fName = participantData.contact.fName;
        contact.lName = participantData.contact.lName;
        contact.email = participantData.contact.email;
        contact.mobile = participantData.contact.mobile;

        authenticator.contact = contact;
        // set the institute attribute of authenticator
        var currentParticipant = getCurrentParticipant();
        var adminInstitute = currentParticipant.institute;
        authenticator.institute = adminInstitute;


        // add to registry
        return authenticatorRegistry.add(authenticator);
    });
 }




 /**
 * create a new instituteAdmin
 * @param {org.docblocks.participant.CreateInstituteAdmin} participantData
 * @transaction
 */
 
function CreateInstituteAdmin(participantData) {
     
    // get participant registry
    return getParticipantRegistry('org.docblocks.participant.InstituteAdmin')
    .then(function (instituteAdminRegistry){
        var factory = getFactory();

        return getParticipantRegistry('org.docblocks.participant.Institute')
        .then(function (instituteRegistry) {

          return instituteRegistry.exists(participantData.instituteId);
        })
        .then(function (exists) {

            if(!exists) throw new Error("Institute with id: " + participantData.instituteId + " do not exist");

            var instituteAdminId = participantData.participantKey;
            var NS = 'org.docblocks.participant';
            var instituteAdmin = factory.newResource(NS, 'InstituteAdmin', instituteAdminId);
            
            // set the attributes of institute admin
            var contact = factory.newConcept(NS,"Contact");
            contact.fName = participantData.contact.fName;
            contact.lName = participantData.contact.lName;
            contact.email = participantData.contact.email;
            contact.mobile = participantData.contact.mobile;

            instituteAdmin.contact = contact;

            // set the institute relationship
            var relationship = factory.newRelationship('org.docblocks.participant', 'Institute', participantData.instituteId);
            instituteAdmin.institute = relationship;

            // add to registry
            return instituteAdminRegistry.add(instituteAdmin);
        })
      
    });
 }


 /**
 * create a new Institute
 * @param {org.docblocks.participant.CreateInstitute} participantData
 * @transaction
 */
 
function CreateInstitute(participantData) {
     
    // get participant registry
    return getParticipantRegistry('org.docblocks.participant.Institute')
    .then(function (instituteRegistry){
        var factory = getFactory();
      
        var instituteId = participantData.instituteId;
        var NS = 'org.docblocks.participant';
        var institute = factory.newResource(NS, 'Institute', instituteId);
          
        institute.instituteName = participantData.instituteName;
        institute.instituteState = participantData.instituteState;
        institute.instituteCity = participantData.instituteCity;
        institute.instituteAddress = participantData.instituteAddress;
        institute.institutePin = participantData.institutePin;
        institute.phoneNumber = participantData.phoneNumber;
        
        // add to registry
        return instituteRegistry.add(institute);
    });
 }


 /**
 * create a new student
 * @param {org.docblocks.participant.CreateStudent} participantData
 * @transaction
 */
 
function CreateStudent(participantData) {
     
    // get participant registry
    return getParticipantRegistry('org.docblocks.participant.Student')
    .then(function (studentRegistry){
        var factory = getFactory();
      
        var studentId = participantData.id;
        var NS = 'org.docblocks.participant';
        var student = factory.newResource(NS, 'Student', studentId);
        student.fName = participantData.fName;
        student.lName = participantData.lName;
        let gender = participantData.gender;
        if(gender.toUpperCase() === "MALE"){
            student.gender = "MALE";
        }
        else{
            student.gender = "FEMALE";
        }
        student.state = participantData.state;
        student.city = participantData.city;
        student.address = participantData.address;
        student.DOB = participantData.DOB;
        
        // add to registry
        return studentRegistry.add(student);
    });
 }