const createJob = async (req, res) => {
  res.send('create job')
}

const getSingleJob = async (req, res) => {
  res.send('get single job')
}

const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}

const updateJob = async (req, res) => {
  res.send('update job')
}

const deleteJob = async (req, res) => {
  res.send('delete job')
}

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
}