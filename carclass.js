class Car
{
    constructor(name,model,type)//constructor of the class
    {
        if (name===undefined)
            {
                this.name="General";
                this.model="GM";
            }
        else
            {
                this.name=name;
                this.model=model;
                this.numOfDoors=4;
            }

        if(name==="Porshe"||name==="Koenigsegg")
            this.numOfDoors=2;

        if(name==="Porshe")
            this.speed='250 km/h';

        if(name==="Koenigsegg")
        {
            this.numOfWheels=4;
            this. isSaloon=true;
        }

        if(type==="trailer")
            {
                this.numOfWheels=8;
                this.isSaloon=false;
                this.speed='0 km/h';
                this.type=type;
            }

    }

    drive(number)//the drive function
        {
            if (this.type==="trailer")
                this.speed='77 km/h';

            return this;
        }
}