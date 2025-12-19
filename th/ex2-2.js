/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer: ช่วยให้โค้ดมีความยืดหยุ่นมากขึ้น เราสามารถส่งฟังก์ชันเข้าไปให้ฟังก์ชันอื่นเรียกใช้งานได้ ทำให้ไม่ต้องเขียนโค้ดซ้ำ ๆ


2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer: ง่ายขึ้นครับ เพราะ ทำให้สามารถเห็น action ได้ง่ายหากจะต้องการเปลี่ยนก็สามารถทำได้ง่ายเพราะยังไงชื่อ callback function ก็เป็น action ที่ทำอยู่แล้ว


3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer:  callback function คือ function ที่เราเขียนขึ้นมาเพื่อนำมาเรียกใช้ซ้ำ
         Higher-Order Function คือ function ที่เราเขียนขึ้นมาเพื่อไปเรียกใช้ callback function => ก็คือเป็นตัวกำหนด flow ในการทำงาน

         ยกตัวอย่าง

         callback function
         const add = (num1, num2) => num1 + num2;
         const subtract = (num1, num2) => num1 - num2;
         const multiply = (num1, num2) => num1 * num2;
         const divide = (num1, num2) => num2 === 0 ? "Cannot divide by zero" : num1 / num2;

         Higher-Order Function
         function calculate(num1, num2, callback) {
               return callback(num1, num2);
          }

         เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
         console.log(calculate(10, 5, add)); // 15
         console.log(calculate(10, 5, subtract)); // 5
         console.log(calculate(10, 5, multiply)); // 50
         console.log(calculate(10, 5, divide)); // 2
         console.log(calculate(10, 0, divide)); // "Cannot divide by zero"

         จะเห็นได้ว่าเราแค่เรียกใช้ตัว callback function โดยไม่ต้องเขียนซ้ำ ซึ่งตัว Higher-Order Function จะเป็นตัวไปดึงมาว่าจะใช้ callbackfunction ไหน โดยผ่านคำสั่งที่เรียกใช้ Higher-Order Function ว่า กำหนด argument เป็นอะไร


*/
