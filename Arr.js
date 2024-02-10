/*function sendMessageToServer(author, message, date) {
    if(message.length > 0) {
      api.send({ author, message, date });
    } else {
      throw new Error;
    }
  }

 const sendMessageToServer = (author, message, date) => {
    message.length > 0 ? api.send (author,message,date) : 'throw new Error';
 };*/


const phone = {
    name: 'Poco x5 pro',
    brandName: 'Xiaomi',
    storage: 256,
    color: 'black',
    power: false,
    call: function(name) {
      return `я звоню ${name}`;
    },
    sent: [

      {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
      
      {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},
      
      ],
      
      inbox: [
      
      {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"},
      
      {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"},
      
      ],
      
    sentMessage: function (to, time, message) {
      this.sent.push(to, time, message)
    },
    clearInbox: function() {
      this.inbox = []
    },
    clearSent: function() {
      this.sent = []
    }
}
console.log(phone.call(phone.name));

phone.sentMessage('89657888404', '10:00', 'Ассаламу 1алайкум');
console.log(phone.sent);

console.log(phone);

phone.clearInbox();
console.log(phone.inbox); 

phone.clearSent();
console.log(phone.sent); 



phone.batteryPower = 100;
console.log(phone);


phone.getBatteryPower = function() {
  return `Ваша зарядка ${this.batteryPower}`
} 
console.log(phone.getBatteryPower());


phone.isOn  = function as() {
  {if(this.power === true){return 'включен'}else if(this.power === false)return 'выключен'};
};
console.log(phone.isOn());

switch(phone.power){
  case true:
    console.log(false)
    break;
  case false:
    console.log(true)
    break;
};



const man = {
  firsName: 'Хамзат',
  lastName: 'Катаев',
  height: 180,
  weight: 80,
  login: 'Kataev77',
  password: 'Amd042ru2002',
  cash: 10000,
  getIMT: function() {
     return this.weight / this.height**2
  },
  imtResult: function(imt) {
    if (imt <= 18) {
      return "Недостаточный вес";
    } else if (imt <= 25) {
      return "Вес в норме";
    } else if (imt <= 29) {
      return "Избыточный вес";
    } else {
      return "Ожирение";
    }
  },
  giveMoney: function(number) {
    if(number > this.cash / 2){
      return 'Делахь, сайгах дац са оццал ахч'
    }else{
      this.cash -= number
      return `Хьаэца хьай ${number}. Соьгахь диснаг х1ар ду: ${this.cash}. Сих хьадалахь!`
    }
  },
  summa: 100000
};



man.addres = {
  city: 'Grozny',
  street: 'Коллективния 65',
  home: 65
};


const checkPassword = {
  password: 'Amd042ru2002'
};

const check = () => {
  checkPassword.password === man.password ? console.log(`Добро пожаловать, ${man.firsName} ${man.lastName}. Ваш логин ${man.login}`)
: console.log(`Указанный пароль ${checkPassword.password} не верен. Попробуйте еще раз.`)}
check();


man.lotteryNumber = 1;


let lottery = Math.random() * 1;
lottery = Math.ceil(lottery);

function lot(){
  if(man.lotteryNumber === lottery){
      return `Поздравляем вы выиграли ${man.summa}`
    }else{
      return 'Вы проиграли, попробуйте еще раз.'
    }
  };

console.log(man.getIMT());
console.log(man.imtResult());
console.log(man.giveMoney(11000))
console.log(man.giveMoney(2500));
console.log(lot())



