import dva from 'dva';
import './index.css';
import  'semantic-ui-css/semantic.min.css';

// 1. Initialize
const app = dva({});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/loginUser'));
app.model(require('./models/BasicInfoAuth'));
app.model(require('./models/ICBCAuth'));
app.model(require('./models/SchoolAuth'));
app.model(require('./models/ZhiMaAuth'));
app.model(require('./models/CreditReport'))


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
