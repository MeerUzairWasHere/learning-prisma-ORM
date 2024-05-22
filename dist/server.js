"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send("Working");
});
app.post("/api/v1/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { username, password, firstName, isVerified, lastName, phoneNumber, address, } = req.body;
    const user = yield ((_a = prisma === null || prisma === void 0 ? void 0 : prisma.user) === null || _a === void 0 ? void 0 : _a.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            isVerified,
        },
    }));
    res.status(200).json({ msg: "User created!", user });
}));
const PORT = process.env.PORT || 5000;
app.use("*", (req, res) => {
    res.status(404).send("Not found");
});
app.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
});
