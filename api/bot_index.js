export default (req, res) => {
  console.log(req)
  res.status(200).json({ name: 'John Doe' })
  
  // return json({
  //   message: `Hello ${name}!`,
  // })
}
