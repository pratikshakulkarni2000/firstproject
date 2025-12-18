
import { Component } from '@angular/core';
import { Istd } from './shared/models/student';
import { Ipro } from './shared/models/product';
import { Icomp, Icompany } from './shared/models/company';
import { Iemp } from './shared/models/employee';
import { Icourse } from './shared/models/course';
import { Itea } from './shared/models/teacher';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Table";

  heading = "Lists";

  stdArr: Array<Istd> = [
    {
      fname: 'John',
      lname: 'Doe',
      email: 'john@gmail.com',
      contact: 1234567890,
      stdid: '123'
    },
    {
      fname: 'May',
      lname: 'Doe',
      email: 'may@gmail.com',
      contact: 9876543210,
      stdid: '124'
    },
    {
      fname: 'Amit',
      lname: 'Patil',
      email: 'amit.patil@gmail.com',
      contact: 9123456780,
      stdid: '101'
    },
    {
      fname: 'Sneha',
      lname: 'Sharma',
      email: 'sneha.sharma@gmail.com',
      contact: 9234567810,
      stdid: '102'
    },
    {
      fname: 'Rahul',
      lname: 'Verma',
      email: 'rahul.verma@gmail.com',
      contact: 9345678120,
      stdid: '103'
    },
    {
      fname: 'Pooja',
      lname: 'Kulkarni',
      email: 'pooja.kulkarni@gmail.com',
      contact: 9456781230,
      stdid: '104'
    },
    {
      fname: 'Rohit',
      lname: 'Mehta',
      email: 'rohit.mehta@gmail.com',
      contact: 9567812340,
      stdid: '105'
    },
    {
      fname: 'Neha',
      lname: 'Joshi',
      email: 'neha.joshi@gmail.com',
      contact: 9678123450,
      stdid: '106'
    },
    {
      fname: 'Kunal',
      lname: 'Deshmukh',
      email: 'kunal.deshmukh@gmail.com',
      contact: 9781234560,
      stdid: '107'
    },
    {
      fname: 'Anjali',
      lname: 'Rane',
      email: 'anjali.rane@gmail.com',
      contact: 9892345670,
      stdid: '108'
    },
    {
      fname: 'Vikas',
      lname: 'Jadhav',
      email: 'vikas.jadhav@gmail.com',
      contact: 9012345678,
      stdid: '109'
    },
    {
      fname: 'Priya',
      lname: 'Naik',
      email: 'priya.naik@gmail.com',
      contact: 9123987654,
      stdid: '110'
    }
  ]
  proArr: Array<Ipro> = [
   {
    pname: 'Laptop',
    brand: 'Dell',
    price: 65000,
    category: 'Electronics',
    pid: 'P101'
  },
  {
    pname: 'Smartphone',
    brand: 'Samsung',
    price: 28000,
    category: 'Electronics',
    pid: 'P102'
  },
{
    pname: 'Headphones',
    brand: 'Sony',
    price: 4500,
    category: 'Accessories',
    pid: 'P103'
  },{
    pname: 'Smart Watch',
    brand: 'Apple',
    price: 42000,
    category: 'Wearables',
    pid: 'P104'
  },
  {
    pname: 'Bluetooth Speaker',
    brand: 'JBL',
    price: 7500,
    category: 'Audio',
    pid: 'P105'
  }, {
    pname: 'Keyboard',
    brand: 'Logitech',
    price: 2200,
    category: 'Computer Accessories',
    pid: 'P106'
  },
  {
    pname: 'Mouse',
    brand: 'HP',
    price: 1200,
    category: 'Computer Accessories',
    pid: 'P107'
  },{
    pname: 'Tablet',
    brand: 'Lenovo',
    price: 18000,
    category: 'Electronics',
    pid: 'P108'
  },
  {
    pname: 'Power Bank',
    brand: 'Mi',
    price: 1500,
    category: 'Mobile Accessories',
    pid: 'P109'
  }, {
    pname: 'USB Flash Drive',
    brand: 'SanDisk',
    price: 900,
    category: 'Storage',
    pid: 'P110'
  }
  ]

  compArr : Array<Icomp> = [
    
  {
    cname: 'Tata Consultancy Services',
    location: 'Mumbai',
    employees: 600000,
    industry: 'IT Services',
    cid: 'C101'
  },
  {
    cname: 'Infosys',
    location: 'Bengaluru',
    employees: 335000,
    industry: 'IT Services',
    cid: 'C102'
  },
  {
    cname: 'Wipro',
    location: 'Bengaluru',
    employees: 250000,
    industry: 'IT Services',
    cid: 'C103'
  },
  {
    cname: 'HCL Technologies',
    location: 'Noida',
    employees: 225000,
    industry: 'IT Services',
    cid: 'C104'
  },
  {
    cname: 'Reliance Industries',
    location: 'Mumbai',
    employees: 195000,
    industry: 'Conglomerate',
    cid: 'C105'
  },
  {
    cname: 'Tech Mahindra',
    location: 'Pune',
    employees: 150000,
    industry: 'IT Services',
    cid: 'C106'
  },
  {
    cname: 'Flipkart',
    location: 'Bengaluru',
    employees: 30000,
    industry: 'E-commerce',
    cid: 'C107'
  },
  {
    cname: 'Amazon India',
    location: 'Hyderabad',
    employees: 100000,
    industry: 'E-commerce',
    cid: 'C108'
  },
  {
    cname: 'Google India',
    location: 'Bengaluru',
    employees: 10000,
    industry: 'Technology',
    cid: 'C109'
  },
  {
    cname: 'Microsoft India',
    location: 'Hyderabad',
    employees: 18000,
    industry: 'Technology',
    cid: 'C110'
  }

  ]

  companyArr : Array<Icompany> = [
  {
    cname1: 'Google',
    location1: 'USA',
    employees1: 190000,
    industry1: 'Technology',
    cid1: 'C101'
  },
  {
    cname1: 'Microsoft',
    location1: 'USA',
    employees1: 221000,
    industry1: 'Software',
    cid1: 'C102'
  },
  {
    cname1: 'Apple',
    location1: 'USA',
    employees1: 161000,
    industry1: 'Electronics',
    cid1: 'C103'
  },
  {
    cname1: 'Amazon',
    location1: 'USA',
    employees1: 1500000,
    industry1: 'E-commerce',
    cid1: 'C104'
  },
  {
    cname1: 'Tata Consultancy Services',
    location1: 'India',
    employees1: 608000,
    industry1: 'IT Services',
    cid1: 'C105'
  },
  {
    cname1: 'Infosys',
    location1: 'India',
    employees1: 328000,
    industry1: 'IT Services',
    cid1: 'C106'
  },
  {
    cname1: 'Reliance Industries',
    location1: 'India',
    employees1: 389000,
    industry1: 'Conglomerate',
    cid1: 'C107'
  },
  {
    cname1: 'Samsung',
    location1: 'South Korea',
    employees1: 270000,
    industry1: 'Electronics',
    cid1: 'C108'
  },
  {
    cname1: 'IBM',
    location1: 'USA',
    employees1: 282000,
    industry1: 'Technology',
    cid1: 'C109'
  },
  {
    cname1: 'Accenture',
    location1: 'Ireland',
    employees1: 738000,
    industry1: 'Consulting',
    cid1: 'C110'
  }
];

 empArr : Array<Iemp> = [
  {
    ename: 'Ravi Kumar',
    department: 'HR',
    salary: 35000,
    experience: 3,
    eid: 'E401'
  },
  {
    ename: 'Anita Desai',
    department: 'Finance',
    salary: 48000,
    experience: 5,
    eid: 'E402'
  },
  {
    ename: 'Suresh Patil',
    department: 'IT',
    salary: 60000,
    experience: 7,
    eid: 'E403'
  },
  {
    ename: 'Meena Joshi',
    department: 'Marketing',
    salary: 42000,
    experience: 4,
    eid: 'E404'
  }
];

 courseArr : Array<Icourse> = [
  {
    courseName: 'Angular Development',
    trainer: 'Rahul Sharma',
    duration: '3 Months',
    fees: 25000,
    courseId: 'CR101'
  },
  {
    courseName: 'Full Stack JavaScript',
    trainer: 'Neha Singh',
    duration: '6 Months',
    fees: 45000,
    courseId: 'CR102'
  },
  {
    courseName: 'Python for Data Science',
    trainer: 'Amit Verma',
    duration: '4 Months',
    fees: 30000,
    courseId: 'CR103'
  }
];

teacherArr : Array<Itea> = [
  {
    tname: 'Sanjay Kulkarni',
    subject: 'Mathematics',
    salary: 52000,
    experience: 10,
    tid: 'T601'
  },
  {
    tname: 'Priya Malhotra',
    subject: 'Science',
    salary: 48000,
    experience: 7,
    tid: 'T602'
  },
  {
    tname: 'Rohit Iyer',
    subject: 'English',
    salary: 45000,
    experience: 6,
    tid: 'T603'
  }
];

skills : Array<string> = ["HTML", "CSS", "JS", "ANGULAR", "SASS", "FLEX", "NODE.JS", "REACT"]

languages: Array<string> = [
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust"
];

frameworks: Array<string> = [
  "Vue",
  "Next.js",
  "Spring Boot",
  "Django",
  "Laravel"
];

 ages: Array<number> = [23, 28, 31, 35, 42];

prices: number[] = [1200, 4500, 9999, 18000, 32500];

ratings: Array<number> = [4.1, 4.5, 3.9, 4.8, 4.3];

tools: Array<string> = [
  "Git",
  "Docker",
  "Jenkins",
  "Postman",
  "Webpack"
];

experienceYears: number[] = [1, 3, 5, 7, 10];

ramSizes: Array<number> = [4, 8, 16, 32, 64];

}
