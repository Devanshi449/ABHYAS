function validateQuestion(req) {
  return (
    'unitId' in req &&
    'questionStatement' in req &&
    'options' in req &&
    'answer' in req &&
    req.options.length === 4
  )
}

function validateQuestionsQuery(req) {
  return 'standard' in req && 'subject' in req
}

export { validateQuestion, validateQuestionsQuery }
