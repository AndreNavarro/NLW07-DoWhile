import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
<<<<<<< HEAD
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
=======
>>>>>>> parent of 366c57a... :sparkles: Recebendo 3 últimas mensagens - #NLW07
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

<<<<<<< HEAD
router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle); 

=======
>>>>>>> parent of 366c57a... :sparkles: Recebendo 3 últimas mensagens - #NLW07
export { router }