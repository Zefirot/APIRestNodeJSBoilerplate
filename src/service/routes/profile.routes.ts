import {Router} from 'restify-router';

const routerProfileInstance = new Router();

let localData=[{
  id:1,
  prifile : {
    name : "Pedro",
    edad : 16
  }
}];

routerProfileInstance.get('/id', async (req, res) => {
  try {
    return res.json(req.query);
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});

routerProfileInstance.get('/get', async (req, res) => { //Esto se tiene que setear por parametro y devuelve un json del elemento
  try {
    const {profileID} = req.query
    const profileElemn = localData.find((e) => String(e.id) === String(profileID))
    if (!profileElemn) {
      throw new Error("Elemento no encontrado");
    }
    return res.json(profileElemn);
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});


export default routerProfileInstance;
