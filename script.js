const supabaseUrl = "https://kkhwmimzavaspczqlduo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraHdtaW16YXZhc3BjenFsZHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NjUxMzksImV4cCI6MjA4OTI0MTEzOX0.r_W7RByAAofZOzeAse6Z9iKY6XqY6LW0qLHVcLpBV5k";

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("signup-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const location = document.getElementById("location").value;

const { error } = await supabaseClient
.from("internet_requests")
.insert([
{
name: name,
phone: phone,
location: location
}
]);

if(error){
message.innerText = "Something went wrong. Try again.";
message.style.color = "red";
}else{
message.innerText = "Request sent! We will contact you shortly.";
message.style.color = "green";
form.reset();
}

});