1-created:
- DB
- REACT-APP
- STRUCTURE for SERVER
2-created:
- BACK -install mongoose express config 
- npm i -D nodemon------------(dev.zavisimost)
- DB-connecting-- 2:47--
- test.drawio -- 3:42--
- 3.3:50


--------------------
Так надежнее:
const uri = config.get('dbUrl')
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })