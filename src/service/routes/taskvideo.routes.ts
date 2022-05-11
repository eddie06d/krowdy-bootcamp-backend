import {Router} from 'restify-router';
import {taskFlowController} from '../controllers/taskflow.controller';

const routerTaskInstance = new Router();

routerTaskInstance.post('/proccessvideos', async (req, res) => {
  try {
    // input videos -> array de paths de los 4 videos en formato .webm
    const {inputvideos} = req.body;
    res.json({inputvideos});
    await taskFlowController.executeProcess(inputvideos);
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});


export default routerTaskInstance;
