import * as path from "path";
import * as cors from "cors";
import * as express from "express";
import { User } from "../models/User";
import { sendEmailToUser } from "../lib/sendgrid";
import { checkBody } from "../middleware/checkBody";
import { verifyAuth } from "../middleware/verifyAuth";
import { createUser, authenticateUser, verifyIfUserExists, completeUserData, updateUserData } from "../controllers/auth-controller";

const app = express();
app.use(cors());

app.use(express.json({ limit: "75mb" }));
const port = process.env.PORT || 3010;

// Send an email to other user
app.post("/send-email-to-user", verifyAuth, checkBody, async(req, res) => {
    const { userEmail } = req.body;

    try {
        const emailSended = await sendEmailToUser(userEmail);
        return emailSended;
    
    } catch(err) {
        console.log("Este es el error de send email: ", err);
    }
});

// Update user data
app.patch("/user/data", checkBody, async(req, res) => {
    const { oldEmail, newEmail, newPassword } = req.body;

    const update = await updateUserData(oldEmail, newEmail, newPassword);
    await res.json({ message: update });
})

// Complete user Info
app.post("/complete/user/info", verifyAuth, checkBody, async(req, res) => {
    const { email, phone_number, username } = req.body;

    await completeUserData(email, phone_number, username);
    await res.json({ message: 'info updated'});
});

// Verify if user exists
app.post("/verify/user", checkBody, async(req, res) => {
    const { email } = req.body;

    const response = await verifyIfUserExists(email);
    await res.json( response );
});

// Sign In
app.post("/auth/token", checkBody, async(req, res) => {
    const { email, password } = req.body;

    const response = await authenticateUser(email, password);
    await res.json(response);
})

// Sign Up
app.post("/auth", checkBody, async (req, res) => {
    const { email, password } = req.body;

    const response = await createUser(email, password);
    await res.json( response );
});

// Finds all users
app.get("/users", async(req, res) => {

    const users = await User.findAll();
    await res.json({ users });
});

// Finds a user
app.get("/user", checkBody, async(req, res) => {
    const { user_id } = req.body;

    const user = await User.findByPk(user_id);
    await res.json({ user });
});

// Shows the info of a user
app.get("/me", checkBody, cors(), verifyAuth , async (req, res) => {

    const data = req._user;
    const userData = await User.findByPk(data['id']);
    await res.json({
        id: userData['id'],
        email: userData['email'],
    });
});

const relativeRoute = path.resolve(__dirname + "../../../dist");
app.use(express.static(relativeRoute));

app.get("*", (req, res) => {
    res.sendFile(relativeRoute + "/index.html");
});

app.listen(port, async ()=> {
    await console.log("Iniciado en el puerto:", port);
});