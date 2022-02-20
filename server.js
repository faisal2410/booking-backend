// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const morgan = require('morgan');
require('dotenv').config();
import { readdirSync } from 'fs';
// app
const app = express();



// middlewear
app.use(cors())
app.use(morgan('dev'));
// Routes middlewear
readdirSync('./routes').map((r) => {
        app.use('/api', require(`./routes/${r}`))

    })
    // routes


// db
mongoose
    .connect(process.env.DATABASE, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`
                        Server is running at $ { port }
                        `))