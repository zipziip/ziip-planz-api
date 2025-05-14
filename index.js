const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 예시 DB (실제로는 Supabase나 MongoDB로 교체해야 함)
let fakeDatabase = {};

app.post("/updatePlanz", async (req, res) => {
  const { uid, newPlanz } = req.body;

  if (!uid || newPlanz === undefined) {
    return res.status(400).json({ error: "Missing uid or newPlanz" });
  }

  try {
    // 실제로는 DB 업데이트 코드 작성 (예: Supabase, MongoDB)
    fakeDatabase[uid] = { planz: newPlanz };
    console.log(`Updated ${uid} -> ${newPlanz}`);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Update failed", err);
    return res.status(500).json({ error: "Update failed" });
  }
});

app.get("/", (_, res) => res.send("Proxy is live"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
