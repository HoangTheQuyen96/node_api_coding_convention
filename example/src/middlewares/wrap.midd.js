module.exports = fn => async (req, res) => {
  try {
    const { status = 200, headers = {}, body = {} } = await fn(req);
    res
      .status(status)
      .set(headers)
      .json(body);
  } catch (error) {
    res.status(error.code || 400).json({
      status: 0,
      reason: 'error.message',
      errors: [{ code: error.code || 400, message: error.message }],
    });
  }
};
