//console.log('Script Bağlandı') JavaScript Dosyasmın bağlantısndan emin oldum

//Html içindeki menuyu çekiyorum
const menu = document.getElementById("menuBar");
//console.log(menu)

//html içindeki menu iconu olan divi çekiyorum
const menuBtn = document.getElementById("menuButton");
//console.log(menuBtn)

//Html deki userButtonu çekiyoruz
const user = document.querySelector("#userButton");
//console.log(user)

//Html de oluşturdupum addUser formunu çağıryorum
const userForm = document.querySelector(".addUser");
//console.log(userForm)

//htmldeki ismin tutulduğu inputa erişiyorum
const nameInput = document.querySelector("#nameInput");
//console.log(nameInput)

const surnameInput = document.querySelector("#surnameInput");
//console.log(surnameInput)

const genderInput = document.querySelector("#genderInput");
//console.log(genderInput)

const locationInput = document.querySelector("#locationInput");
//console.log(locationInput)

const ageInput = document.querySelector("#ageInput");
//console.log(ageInput)

//Ekleme işlemi yapacak buonu alıroyur
const addButton = document.getElementById("addButton");
//console.log(addButton)

const userList = document.querySelector("#userList");
//console.log(userList)

//Kullanıcların tutulacağı dizi
let users = [
  {
    userName: "Hasan",
    userSurname: "Çelik",
    userGender: "Erkek",
    userLocation: "Konya",
    userAge: 25,
  },
];

//Yeni Kullanıcı ekleyen fonksiyon
const addNewUser = () => {
  //girilen kullanıcı adını inputun value özelliğindne alıyouz
  const newuserName = nameInput.value;
  //girilen kullanıcı adını inputun value özelliğindne alıyouz
  const newuserSurname = surnameInput.value;

  const newuserGender = genderInput.value;
  const newuserLocation = locationInput.value;
  const newuserAge = ageInput.value;
  //console.log(newuserName,newuserSurname)

  //yeni kullanıcyı obje şeklinde oluşturuyoruz
  let newUser = {
    userName: newuserName,
    userSurname: newuserSurname,
    userGender: newuserGender,
    userLocation: newuserLocation,
    userAge: newuserAge,
  };
  // console.log(newUser)
  //oluşturdğumuz objeyi push() metoduyla diziye ekliyoruz
  users.push(newUser);


  //kayıt işlemi tamamlandıktan sonra input alanları temizleniyor
  nameInput.value = "";
  surnameInput.value = "";
  genderInput.value = "";
  locationInput.value = "";
  ageInput.value = "";

  //console.log(users);
};

//Kulanıcları listeleyen fonksşyon

function showUsers() {
    //fonksiyon çalıştırldığında çocuk olarak atandığı elementin için temizliyoz ki güncel yapı gözüksün
    
  userList.innerHTML = "";

  users.map((user) => {
    const userCard = document.createElement("div");
    //console.log(userCard)

    //userCard ın class listine card classını ekledik
    userCard.classList.add("card");

    userCard.innerHTML = `
    
    <div class="card-left">
    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="">
</div>
<div class="card-right">
    <div class="infoBox">
        <span>Kullanıcı Adı:</span>
        <span>${user.userName}</span>
    </div>
    <div class="infoBox">
        <span>Kullanıcı Soyadı:</span>
        <span>${user.userSurname}</span>
    </div>
    <div class="infoBox">
        <span>Kullanıcı Cinsiyet:</span>
        <span>${user.userGender}</span>
    </div>
    <div class="infoBox">
        <span>Kullanıcı Yaşadığı Yer:</span>
        <span>${user.userLocation}</span>
    </div>
    <div class="infoBox">
        <span>Kullanıcı Yaşı:</span>
        <span>${user.userAge}</span>
    </div>
</div>
    
    
    
    
    `;

    userList.appendChild(userCard);
  });
}

//İlk açlışta mevcut diziyi döndürmek için kullanıyoruz
showUsers();

//html de oluşturduğumuz formdaki butona kullanıcı kaydı için bir tıklama eventi eventi ekliyoruz
addButton.addEventListener("click", () => {

    //Inputların boş geçilmemesini sağlamak için validaiton yaptık
  if (nameInput.value == "") {
    alert("Kullanıcının adını gir");
  } else if (surnameInput.value == "") {
    alert("Kullanıcı soyadını gir");
  } else if (genderInput.value == "") {
    alert("Kullacnın cinsiyetini gir");
  } else if (locationInput.value == "") {
    alert("Kullanıcnın şehrini gir");
  } else if (ageInput.value == "") {
    alert("kullanıucnın yaşını gir");

  } 
  
  //Eğer tüm şartları geçerse ekleme fonksiyonu çalışıyor
  else {
    addNewUser();
  }

  //ekleme olduktan sonra tekrar güncellemkiçin kullanıyoz
  showUsers();
});

//Önce user formu ekranda göster
//Sonra user forma içindeki inputa gilrien veriye eriş
//sonra olarka bu veriyi user dizisine kaydet

user.addEventListener("click", () => {
  userForm.classList.toggle("openAddUser");
});

menuBtn.addEventListener("click", () => {
  //console.log('Butona Basıldı')

  menu.classList.toggle("open");
});
