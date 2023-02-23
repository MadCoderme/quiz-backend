const express = require('express')
const app = express()
const cors = require('cors')
const { Client } = require('pg')

const port = 3000

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())


//initiate postgres connection
const client = new Client({
    host: 'dpg-cfrj6n4gqg46pjuojp0g-a.oregon-postgres.render.com',
    port: 5432,
    database: 'test_db_3bp5',
    user: 'test_db_3bp5_user',
    password: 'B2kCFx1kWOI6jOMgUD9bYhYhYwuAJkau',
    ssl: true
})

client.connect(async(err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {

        //make sure we got the tables

        const res = await client.query(`CREATE TABLE IF NOT EXISTS quizzes (
            id SERIAL PRIMARY KEY,
            title varchar(200) NOT NULL,
            description varchar(200) NOT NULL,
            questions jsonb NOT NULL DEFAULT '{}'::jsonb
          )`)

        //endpoints

        //create a new quiz
        app.post('/quiz', async(req, res) => {
                let success = true,
                    data = null
                    errors = []

                try {
                    if(req.body.title && req.body.description && req.body.questions) {
                        if(req.body.questions.length > 0) {
                            const res = 
                            await client.query(`INSERT INTO quizzes(title, description, questions) VALUES($1, $2, $3) RETURNING id`,
                                [req.body.title, req.body.description, JSON.stringify(req.body.questions)])
                            data = res.rows[0]
                            errors = null
                        } else {
                            success = false
                            errors.push(3)
                        }
                    } else {
                        success = false
                        errors.push(2)
                    }
                } catch (error) {
                    success = false
                    errors.push(0)
                    console.log(error)
                }

                res.json({
                    success, errors, data
                })

            })

        //get quiz data
        app.get('/quiz', async(req, res) => {
                let success = true,
                    data = null
                    errors = []

                try {
                    const res = await client.query('SELECT * FROM quizzes WHERE id = $1', [req.query.id])

                    if(res.rowCount > 0) {
                        data = res.rows[0]
                        errors = null
                    } else {
                        success = false
                        errors.push(1)
                    }
                } catch (error) {
                    success = false
                    errors.push(0)
                    console.log(error)
                }

                res.json({
                    success, errors, data
                })

        })

        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })

    }
})