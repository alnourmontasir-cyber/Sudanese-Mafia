const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ⬇️ تم وضع الرابط والمفتاح الخاص بك هنا
const supabaseUrl = 'https://dwmbrjxiurlvrozsfqyg.supabase.co'; 
const supabaseKey = 'sb_publishable_tsyY2zL44mEN2BDP1Zcodg_MFRu-kRS'; 

const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.send('✅ السيرفر يعمل بنجاح ومحمي!');
});

app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
