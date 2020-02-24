        const obj = {
            name: 'jane',
            age: 32,
            height: 165,
            weight: 85,
        }
        let newobj = {};
        for (let key in obj) {
            newobj[key] = obj[key]
        }
        console.log(newobj);
        newobj.name = 'Test update'
        console.log(newobj)
        console.log(obj);
        
