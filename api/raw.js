// api/raw.js - Xử lý raw file
export default function handler(req, res) {
  const { repo } = req.query;
  const userAgent = req.headers['user-agent'] || '';
  
  // Trong thực tế, bạn sẽ lấy nội dung từ database
  // Ở đây tôi hardcode để demo
  const isCurl = userAgent.includes('curl') || 
                 userAgent.includes('Wget') || 
                 userAgent.includes('Termux');
  
  res.setHeader('Content-Type', 'text/plain');
  
  if (isCurl) {
    res.status(200).send('print("meo")');
  } else {
    res.status(200).send('print("hello world")');
  }
}
