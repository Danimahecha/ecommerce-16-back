const {User} = require('../db.js');


    const getUsers =async(req, res) => {
        try {
        const users = await User.findAll()
        res.json(users);
        } catch (error) {
        return res.status (400).json({message: error.message})
        }

    };

    const getUser = async (req, res) => {
        try {
            const {id} = req.params;
            const user = await User.findOne({
                where: { id }
            })
            if(!user)return res.status(404).json({message:'Users not exist'})
            res.json(user);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    };

    const createUser = async(req,res)=>{
        const { id, givenName, familyName, email, }= req.body;
     

        try {
            const newUser = await User.create({
               
                id: id,
                givenName: givenName,
                familyName: familyName,
                email: email,
               
            });
     //     emailer.sendMail(newUser);

        res.status(200).send(newUser);  
        
    } catch (error) {
            return res.status (400).json({message: error.message})   
        
    }
    };

    const updateUser = async (req, res ) =>{
        
        const { id } = req.params;
        const { names, lastNames, nickname, phoneNumber, email, country, city, DateOfBirth, picture }= req.body
        
        try {

            const user = await User.findByPk(id)
            await user.update({
                givenName: names,
                familyName: lastNames,
                nickName: nickname,
                phone: phoneNumber,
                email: email,
                country: country,
                city:city,
                birthdate: DateOfBirth,
                picture: picture
            })
            await user.save()

            res.status(200).send('successfully modified')
        } catch (error) {

            return res.status (400).json({message: error.message})

        }
    

    };

    const deleteUser = async (req, res ) =>{
        try {
            const { id } = req.params
        await User.destroy({
            where:{
                id,
            }
        })
        res.status(200).send('deleted successfully')

        } catch (error) {
            return res.status (400).json({message: error.message})
        }
    }

   

    const isAdmin = async (req, res) => {

        try {
            res.status(200).send(true);
          } catch (error) {
            res.status(200).send(false);
          }

    }
    
module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    
    isAdmin,
  };