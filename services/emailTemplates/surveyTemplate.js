const keys = require('../../config/keys');

module.exports = (survey) => {
    return `<html>
        <body>
            <div style="text-align: center;">
                <h2>Wow~ You found us!</h2>
                <h3>Do you like our service?</h3>
                <p>${survey.body}</p>
                <div><a href= "${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yep!</a></div>
                <div>
                </div>
                <div><a href= "${keys.redirectDomain}/api/surveys/${survey.id}/no">Not Really!</a></div>
            </div>
        </body>
    </html>`;
};
