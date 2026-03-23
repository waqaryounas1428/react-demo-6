


class Product {

    //special type of method
    //used to create / initialize an object 

    constructor(id, name, price, gstRate) {

        // price
        //_Price
        //this.Price


        this.Id = id;
        this.Name = name;
        this.Price = price;
        this.GstRate = gstRate;
    }

    //getter and setter are special type of methods 
    //used to get and set value of a field
    o
    set Id(value) {
        if (value != undefined) {
            if (value < 1) throw TypeError("id can't be zero or negative number");
            this._Id = value;
        }
    }


    get Id() {
        return this._Id;
    }


    set Price(value) {
        if (value != undefined) {
            if (value < 0) throw TypeError("price can't be negative");
            this._Price = value
        }
    }
    get Price() {
        return this._Price;
    }


    set Name(value) {
        if (value) {
            if (value.length < 3 || value.length > 50) throw TypeError("name must have 3 to 50 carachters");
            this._Name = value;
        }
    }


    get Name() {
        return this._Name;
    }

    set GstRate(value) {
        if (value != undefined) {
            if (value < 0 || value > 100) throw TypeError("GST rate must be from 0 to 100");
            this._GstRate = value;
        }
    }


    get GstRate() {
        return this._GstRate;
    }

    get GstAmount() {
        return this.Price * this.GstRate / 100;
    }

    get RetailPrice() {
        return this.Price + this.GstAmount;
    }

    get Summary() {
        return `${this.Id},${this.Name},${this.RetailPrice}`;
    }

    get Details() {
        return `${this.Id},${this.Name},${this.Price},${this.GstAmount},${this.RetailPrice}`;
    }




}

module.exports = {
    Product
}