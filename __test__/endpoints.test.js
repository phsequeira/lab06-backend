const { app } = require('../app.js');
const { data } = require('../data.js');

const supertest = require('supertest');

const request = supertest(app);

it('should show all boards in data', 
    
    async(done) => {
        const expectation = {
           
            results: data
        };

        
        const response = await request.get('/data');

        
        expect(response.status).toBe(200);
        
        expect(response.body).toEqual(expectation);
        
        done();
    });


it('should comeback with selected board from data', 
  
    async(done) => {
        const expectation = {
            
            results: {
                id: 1,
        name: 'Twinzer', 
        image: 'Twinzer.PNG',
        description: 'Beginner-Intermediate, Intermediate-Advanced, Advanced-Expert',
        category: 'wakesurf',
        price: 899.99,
            }
        };

        
        const response = await request.get('/data/1');
        
        expect(response.status).toBe(200);
        
        expect(response.body).toEqual(expectation);
        
        done();
    });