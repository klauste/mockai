function getContentType(prompt) {
    if (prompt.indexOf('Translate') > -1) {
        return 'translate';
    }
    if (prompt.indexOf('mcq') > -1) {
        return 'mcq_questions';
    }
    if (prompt.indexOf('true/false question') > -1) {
        return 'true_false_questions';
    }
    if (prompt.indexOf('drag and drop question') > -1) {
        return 'cloze_association_questions';
    }
    return '';
}

module.exports = {
    getContentType,
};
