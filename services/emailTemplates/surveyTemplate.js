// const surveyRoutes = require("../../routes/surveyRoutes");

module.exports = (survey) => {
    return '<div>'+ survey.body +'</div>';
};


// const surveyTemplate = (survey) => {
//     return 
//     `<html>
//         <body>
//             <div style= "text-align: center; ">
//                 <h3>
//                     Wow~ You found us!
//                 </h3>
//                 <p>Do you like our service?</p>
//                 <p>${survey.body}</p>
//                 <div>
//                     <a href= "${keys.redirectDomain}/api/surveys/feedback">Yep!</a>
//                 </div>
//                 <div>
//                 </div>
//                 <div>
//                     <a href= "${keys.redirectDomain}/api/surveys/feedback">Not Really!</a>
//                 </div>
//             </div>
//         </body>
//     </html>`
//     ;
// };

// module.exports = surveyTemplate;