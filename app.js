function formatText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


function removeReturns(text) {
    return text.replace(/\r?\n|\r/g, "");
}





function reportOnText(text) {
    // assign our results to var
    var formatedText = getWordReport(formatText(text));
    var numDistinctWords = uniqueWordCount;
    var numTotalWords = wordCount;
    var averageWordLength = avgWordCount;




    // take data and display it in the dom
    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(numTotalWords);
    textReport.find('.js-unique-word-count').text(numDistinctWords);
    textReport.find('.js-average-word-length').text(
        averageWordLength + " characters");
    textReport.removeClass('hidden');
}


function getWordReport(words) {
    var unique = {};
    var total = 0;

    for (var word of words) {
        if (!unique[word]) {
            unique[word] = 1;
        }
        total += word.length;
    }


    return {
        wordCount: words.length,
        unique: Object.keys(unique).length,
        avgWordCount: total / words.length
    };
}


function watchFormSubmission() {
    $('.js-text-form').submit(function (event) {
        event.preventDefault();
        // get the text the user submitted
        var userText = $(this).find('#user-text').val();
        reportOnText(removeReturns(userText));
    });
}



watchFormSubmission();