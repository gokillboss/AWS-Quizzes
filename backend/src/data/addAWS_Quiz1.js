"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var quizModel_1 = require("../models/quizModel");
var questionModel_1 = require("../models/questionModel");
var connectDB = function () { return __awaiter(void 0, void 0, void 0, function () {
    var uri, conn, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uri = 'mongodb://127.0.0.1:27017/AWS_Quiz';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mongoose_1["default"].connect(uri)];
            case 2:
                conn = _a.sent();
                console.log("MongoDB Connected: ".concat(conn.connection.host));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error: ".concat(error_1.message));
                process.exit(1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var createAWSExam = function () { return __awaiter(void 0, void 0, void 0, function () {
    var awsQuestions, awsExamQuiz_1, questionsWithQuizId, insertedQuestions, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connectDB()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 8, 9, 11]);
                return [4 /*yield*/, connectDB()];
            case 3:
                _a.sent();
                awsQuestions = [
                    {
                        questionText: 'What is the primary service in AWS for hosting static websites?',
                        options: [
                            { text: 'AWS S3', isCorrect: true },
                            { text: 'AWS Lambda', isCorrect: false },
                            { text: 'AWS EC2', isCorrect: false },
                            { text: 'AWS CloudWatch', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which AWS services can be used to store files?',
                        options: [
                            { text: 'Amazon Elastic Block Store (Amazon EBS)', isCorrect: true },
                            { text: 'AWS Config', isCorrect: false },
                            { text: 'Amazon Athena', isCorrect: false },
                            { text: 'Amazon Cloud Watch', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services uses AWS edge locations?',
                        options: [
                            { text: 'Amazon CloudFront', isCorrect: true },
                            { text: 'Amazon Virtual Private Cloud (Amazon VPC)', isCorrect: false },
                            { text: 'Amazon Elastic Compute Cloud (Amazon EC2)', isCorrect: false },
                            { text: 'AWS Storage Gateway', isCorrect: false }
                        ],
                        category: 2
                    }, {
                        questionText: 'Which of the following is a benefit of Amazon Elastic Compute Cloud (Amazon EC2) over physical servers?',
                        options: [
                            { text: 'Paying only for what you use', isCorrect: true },
                            { text: 'Automated backup', isCorrect: false },
                            { text: 'The ability to choose hardware vendors', isCorrect: false },
                            { text: 'Root / administrator access', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which AWS service provides infrastructure security optimization recommendations?',
                        options: [
                            { text: 'AWS Trusted Advisor', isCorrect: true },
                            { text: 'Amazon Elastic Compute Cloud (Amazon EC2) Spot Fleet', isCorrect: false },
                            { text: 'AWS Price List Application Programming Interface (API)', isCorrect: false },
                            { text: 'Reserved Instancesx', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which service allows for the collection and tracking of metrics for AWS services?',
                        options: [
                            { text: 'Amazon Cloud Watch', isCorrect: true },
                            { text: 'Amazon Cloud Search', isCorrect: false },
                            { text: 'Amazon Cloud Front', isCorrect: false },
                            { text: 'Amazon Machine Learning (Amazon ML)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A Company needs to know which user was responsible for terminating several Amazon Elastic Cloud (Amazon EC2) Instances. Where can the customer find this information?',
                        options: [
                            { text: 'AWS Cloud Trail Logs', isCorrect: true },
                            { text: 'AWS Trusted Advisor', isCorrect: false },
                            { text: 'Amazon EC2 instance usage report', isCorrect: false },
                            { text: 'Amazon Cloud Watch', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which service should an administrator use to register a new domain name with AWS?',
                        options: [
                            { text: 'Amazon Route 53', isCorrect: true },
                            { text: 'Amazon Cloud Front', isCorrect: false },
                            { text: 'Elastic Load Balancing', isCorrect: false },
                            { text: 'Amazon Virtual Private Cloud (Amazon VPC)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'What is the value of having AWS Cloud services accessible through an Application Programming Interface (API)?',
                        options: [
                            { text: 'Cloud resources can be managed programmatically', isCorrect: true },
                            { text: 'AWS infrastructure use will always be cost-optimized', isCorrect: false },
                            { text: 'All application testing is managed by AWS', isCorrect: false },
                            { text: 'Customer -owned, on -premises infrastructure becomes programmable', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following examples supports the cloud design principle "design for failure and nothing will fail"?',
                        options: [
                            { text: 'Deploying an application in multiple Availability Zones', isCorrect: true },
                            { text: 'Adding an elastic load balancer in front of a single Amazon Elastic Computer Cloud (Amazon EC2) instance', isCorrect: false },
                            { text: 'Creating and deploying the most cost-effective solution', isCorrect: false },
                            { text: 'Using Amazon CloudWatch alerts to monitor performance', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which service allows an administrator to create and modify AWS user permissions?',
                        options: [
                            { text: 'AWS Identity and Access Management', isCorrect: true },
                            { text: 'AWS Config', isCorrect: false },
                            { text: 'AWS Cloud Trail', isCorrect: false },
                            { text: 'AWS Key Management Service (AWS KMS)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which AWS service automates infrastructure provisioning and administrative tasks for an analytical data warehouse?',
                        options: [
                            { text: 'Amazon Redshift', isCorrect: true },
                            { text: 'Amazon DynamoDB', isCorrect: false },
                            { text: 'Amazon ElastiCache', isCorrect: false },
                            { text: 'Amazon ElastiCache', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is the responsibility of the AWS customer according to the Shared Security Model?',
                        options: [
                            { text: 'Managing AWS Identity and Access Management (IAM)', isCorrect: true },
                            { text: 'Securing edge locations', isCorrect: false },
                            { text: 'Monitoring physical device security', isCorrect: false },
                            { text: 'Implementing service organization Control (SOC) standards', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Where can a customer go to get more detail about Amazon Elastic Compute Cloud (Amazon EC2) billing activity that took place 3 months ago?',
                        options: [
                            { text: 'AWS Cost and Usage reports', isCorrect: true },
                            { text: 'Amazon EC2 dashboard', isCorrect: false },
                            { text: 'AWS Trusted Advisor dashboard', isCorrect: false },
                            { text: 'AWS Cloud Trail logs stored in Amazon Simple Storage Service  Amazon S3)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Who has control of the data in an AWS account?',
                        options: [
                            { text: 'AWS Account Owner', isCorrect: true },
                            { text: 'AWS Support Team', isCorrect: false },
                            { text: 'AWS Security Team', isCorrect: false },
                            { text: 'AWS Technical Account Manager (TAM)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'The main benefit of decoupling an application is to:',
                        options: [
                            { text: 'Reduce inter-dependencies so failures do not impact other components.', isCorrect: true },
                            { text: 'Create a tightly integrated application.', isCorrect: false },
                            { text: 'Enable data synchronization across the web application layer.', isCorrect: false },
                            { text: 'Have the ability to execute automated bootstrapping actions.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is a benefit of running an application across two Availability Zones?',
                        options: [
                            { text: 'It increases the availability of an application compared to running in a single Availability Zone.', isCorrect: true },
                            { text: 'It is more secure than running in a single Availability Zone.', isCorrect: false },
                            { text: 'It significantly reduces the total cost of ownership versus running in a single Availability Zone.', isCorrect: false },
                            { text: 'Performance is improved over running in a single Availability Zone.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following security requirements are managed by AWS customers?',
                        options: [
                            { text: 'Password Policies and User permissions', isCorrect: true },
                            { text: 'Physical security', isCorrect: false },
                            { text: 'Disk disposal', isCorrect: false },
                            { text: 'Hardware patching', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Systems applying the cloud architecture principle of elasticity will:',
                        options: [
                            { text: 'Create systems that scale to the required capacity based on changes in demand.', isCorrect: true },
                            { text: 'Minimize storage requirements by reducing logging and auditing activities.', isCorrect: false },
                            { text: 'Enable AWS to automatically select the most cost-effective services.', isCorrect: false },
                            { text: 'Accelerate the design process because recovery from failure is automated, reducing the need for testing.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Amazon Elastic Compute Cloud (Amazon EC2) Spot instances are appropriate for which of the following workloads?',
                        options: [
                            { text: 'Workloads where the availability of the Amazon EC2 instances can be flexible.', isCorrect: true },
                            { text: 'Workloads that are only run in the morning and stopped at night.', isCorrect: false },
                            { text: 'Workloads that need to run for long periods of time without interruption.', isCorrect: false },
                            { text: 'Workloads that are critical and need Amazon EC2 instances with termination protection.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'What AWS feature enables a user to manage services through a web-based user interface?',
                        options: [
                            { text: 'AWS Management Console, Amazon Cloud Watch', isCorrect: true },
                            { text: 'AWS Application Programming Interface (API)', isCorrect: false },
                            { text: 'AWS Software Development Kit (SDK)', isCorrect: false },
                            { text: 'AWS CloudWatch Logs', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which tool can display the distribution of AWS spending?',
                        options: [
                            { text: 'AWS Cost Explorer', isCorrect: true },
                            { text: 'AWS organizations', isCorrect: false },
                            { text: 'Amazon Dev Pay', isCorrect: false },
                            { text: 'AWS Trusted Advisor', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'How can the AWS Management Console be secured against unauthorized access?',
                        options: [
                            { text: 'Apply Multi-Factor Authentication (MFA)', isCorrect: true },
                            { text: 'Set up a secondary password', isCorrect: false },
                            { text: 'Request root access privileges', isCorrect: false },
                            { text: 'Disable AWS console access', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which AWS Cloud service is used to turn on Multi-Factor Authentication (MFA)?',
                        options: [
                            { text: 'AWS Identity and Access Management (IAM)', isCorrect: true },
                            { text: 'Amazon Elastic Compute Cloud (Amazon EC2)', isCorrect: false },
                            { text: 'AWS Config', isCorrect: false },
                            { text: 'Amazon Inspector', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A disaster recovery strategy on AWS should be based on launching infrastructure in a separate:',
                        options: [
                            { text: 'AWS Region', isCorrect: true },
                            { text: 'Subnet', isCorrect: false },
                            { text: 'AWS edge location', isCorrect: false },
                            { text: 'Amazon Virtual Private Cloud (Amazon VPC)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is a factor when calculating Total Cost of Ownership (TCO) for the AWS Cloud?',
                        options: [
                            { text: 'The number of servers migrated to AWS', isCorrect: true },
                            { text: 'The number of users migrated to AWS', isCorrect: false },
                            { text: 'The number of passwords migrated to AWS', isCorrect: false },
                            { text: 'The number of keys migrated to AWS', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which AWS service is used as a global content delivery network (CDN) service in AWS?',
                        options: [
                            { text: 'Amazon Cloudfront', isCorrect: true },
                            { text: 'Amazon SES', isCorrect: false },
                            { text: 'Amazon Cloudtrail', isCorrect: false },
                            { text: 'Amazon S3', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is a fully managed NoSQL database service available with AWS.',
                        options: [
                            { text: 'AWS DynamoDB', isCorrect: true },
                            { text: 'AWS RDS', isCorrect: false },
                            { text: 'AWS Redshift', isCorrect: false },
                            { text: 'AWS MongoDB', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A company wants to store data that is not frequently accessed. What is the best and cost efficient solution that should be considered?',
                        options: [
                            { text: 'Amazon Glacier', isCorrect: true },
                            { text: 'Amazon EBS', isCorrect: false },
                            { text: 'Amazon S3', isCorrect: false },
                            { text: 'Amazon Storage Gateway', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'You are currently hosting an infrastructure and most of the EC2 instances are near 90-100% utilized. What is the type of EC2 instances you would utilize to ensure costs are minimized?',
                        options: [
                            { text: 'Reserved instances', isCorrect: true },
                            { text: 'On-demand instances', isCorrect: false },
                            { text: 'Spot instances', isCorrect: false },
                            { text: 'Regular Instances', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'What is the ability provided by AWS to enable fast, easy, and secure transfers of files over long distances between your client and your Amazon S3 bucket.',
                        options: [
                            { text: 'Transfer Acceleration', isCorrect: true },
                            { text: 'File Transfer', isCorrect: false },
                            { text: 'HTTP Transfer', isCorrect: false },
                            { text: 'S3 Acceleration', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'As per the AWS Acceptable Use Policy, penetration testing of EC2 instances',
                        options: [
                            { text: 'May be performed by the customer on their own instances with prior authorization from AWS.', isCorrect: true },
                            { text: 'May be performed by AWS, and will be performed by AWS upon customer request', isCorrect: false },
                            { text: 'May be performed by AWS, and is periodically performed by AWS.', isCorrect: false },
                            { text: 'May be performed by the customer on their own instances, only if performed from EC2 instances.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'The Trusted Advisor service provides insight regarding which four categories of an AWS account?',
                        options: [
                            { text: 'Performance, cost optimization, security, and fault tolerance.', isCorrect: true },
                            { text: 'Security, fault tolerance, high availability, and connectivity.', isCorrect: false },
                            { text: 'Security, access control, high availability, and performance.', isCorrect: false },
                            { text: 'Performance, cost optimization, access control,and connectivity.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A company is deploying a two-tier, high availability web application to AWS. Which service provides durable static content while utilizing lower Overall CPU resources for the web tier?',
                        options: [
                            { text: 'Amazon S3', isCorrect: true },
                            { text: 'Amazon EBS volume', isCorrect: false },
                            { text: 'Amazon EC2 instance store', isCorrect: false },
                            { text: 'Amazon RDS instance', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'What best describes the "Principle of Least Privilege"? Choose the correct answer from the options given below:',
                        options: [
                            { text: 'Users should be granted permission to access only resources they need to do their assigned job.', isCorrect: true },
                            { text: 'All users should have the same baseline permissions granted to them to use basic AWS services.', isCorrect: false },
                            { text: 'Users should submit all access requests in writing so that there is a paper trail of who needs access to different AWS resources.', isCorrect: false },
                            { text: 'Users should always have a little more access granted to them then they need, just in case they end up needing it in the future.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the below mentioned services can be used to host virtual servers in the AWS cloud?',
                        options: [
                            { text: 'AWS EC2', isCorrect: true },
                            { text: 'AWS IAM', isCorrect: false },
                            { text: 'AWS Server', isCorrect: false },
                            { text: 'AWS Regions', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following can be used to protect EC2 Instances hosted in AWS.',
                        options: [
                            { text: 'Usage of Security Groups, Usage of Network Access Control Lists', isCorrect: true },
                            { text: 'Usage of AMIs', isCorrect: false },
                            { text: 'Usage of the Internet Gateway', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'You work for a company that is planning on using the AWS EC2 service. They currently create golden images of their deployed Operating system. Which of the following correspond to a gold image in AWS.',
                        options: [
                            { text: 'Amazon Machines Image', isCorrect: true },
                            { text: 'EBS Volumes', isCorrect: false },
                            { text: 'EBS Snapshots', isCorrect: false },
                            { text: 'EC2 Copies', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: '',
                        options: [
                            { text: 'Choose AWS services which are PCI compliant, Ensure the right steps are taken during application development for PCI Compliance', isCorrect: true },
                            { text: 'Ensure the AWS Services are made PCI Compliant', isCorrect: false },
                            { text: 'Do an audit after the deployment of the application for PCI Compliance', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the below can not be used to get data onto Amazon Glacier?',
                        options: [
                            { text: 'AWS Console', isCorrect: true },
                            { text: 'AWS Glacier API', isCorrect: false },
                            { text: 'AWS Glacier SDK', isCorrect: false },
                            { text: 'AWS S3 Lifecycle policies', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following in the AWS Support plan D gives access to a Support Concierge:',
                        options: [
                            { text: 'Enterprise', isCorrect: true },
                            { text: 'Basic', isCorrect: false },
                            { text: 'Developer', isCorrect: false },
                            { text: 'Business', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A company is planning to use AWS to host critical resources. Most of their systems are business critical and need to have response times less than 15 minutes.Which of the following support plans should they consider',
                        options: [
                            { text: 'Enterprise', isCorrect: true },
                            { text: 'Basic', isCorrect: false },
                            { text: 'Developer', isCorrect: false },
                            { text: 'Business', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is NOT a feature of an edge location?',
                        options: [
                            { text: 'Distribute load across multiple resources', isCorrect: true },
                            { text: 'Distribute content to users', isCorrect: false },
                            { text: 'Cache common responses', isCorrect: false },
                            { text: 'Used in conjunction with the Cloudfront service', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'There is a requirement for storage of objects. The objects should be able to be downloaded via a URL. Which storage option would you choose?',
                        options: [
                            { text: 'Amazon S3', isCorrect: true },
                            { text: 'Amazon Glacier', isCorrect: false },
                            { text: 'Amazon Storage Gateway', isCorrect: false },
                            { text: 'Amazon EBS', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'There is a requirement to host a database server for a minimum period of one year. Which of the following would result in the least cost?',
                        options: [
                            { text: 'Partial upfront costs reserved', isCorrect: true },
                            { text: 'Spot instances', isCorrect: false },
                            { text: 'On-demand', isCorrect: false },
                            { text: 'No upfront costs reserved', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'There is a requirement for a development and test environment for 3 months. Which would you use?',
                        options: [
                            { text: 'On-Demand', isCorrect: true },
                            { text: 'No Upfront costs reserved', isCorrect: false },
                            { text: 'Partial upfront costs reserved', isCorrect: false },
                            { text: 'Spot Instances', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'When creating security groups, which of the following is a responsibility of the customer?',
                        options: [
                            { text: 'Giving a name and description for the security group.', isCorrect: true },
                            { text: 'Ensure the rules are applied immediately.', isCorrect: false },
                            { text: 'Ensure the security groups are linked to the Elastic Network interface.', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following are advantages of having infrastructure hosted on the AWS Cloud?',
                        options: [
                            { text: 'Having the pay as you go model', isCorrect: true },
                            { text: 'Having no need to worry about security', isCorrect: false },
                            { text: 'Having complete control over the physical infrastructure.', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'There is an external audit being carried out on your company. The IT auditor needs to have a log of all access for the AWS resources in the company account. Which of the below services can assist in providing these details?',
                        options: [
                            { text: 'AWS Cloudtrail', isCorrect: true },
                            { text: 'AWS EC2', isCorrect: false },
                            { text: 'AWS SNS', isCorrect: false },
                            { text: 'AWS Cloudwatch', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following features of RDS allows for data redundancy across regions?',
                        options: [
                            { text: 'Creating Read Replica', isCorrect: true },
                            { text: 'Using snapshots', isCorrect: false },
                            { text: 'Using Multi-AZ feature', isCorrect: false },
                            { text: 'Cross region replication', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company has a set of EC2 instances hosted on AWS. There is a requirement to create snapshots from the EBS volumes attached to these EC2 instances in another geographical location. As per this requirement, where would you create the snapshots?',
                        options: [
                            { text: 'In another region', isCorrect: true },
                            { text: 'In another Availability Zone', isCorrect: false },
                            { text: 'In another data center', isCorrect: false },
                            { text: 'In another Edge location', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A company wants to host a self-managed database in AWS. How would you ideally implement this solution?',
                        options: [
                            { text: 'Hosting a database on an EC2 Instance', isCorrect: true },
                            { text: 'Using the Amazon Aurora service', isCorrect: false },
                            { text: 'Using the AWS DynamoDB service', isCorrect: false },
                            { text: 'Using the AWS RDS service', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is a compatible MySQL database which also has the ability to grow in storage size on its own?',
                        options: [
                            { text: 'Aurora', isCorrect: true },
                            { text: 'DynamoDB', isCorrect: false },
                            { text: 'RDS Microsoft SQL Server', isCorrect: false },
                            { text: 'RDS Microsoft SQL Server', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following statements are TRUE when it comes to elasticity?',
                        options: [
                            { text: 'Diverting traffic to instances based on the demand', isCorrect: true },
                            { text: 'Diverting traffic across multiple regions', isCorrect: false },
                            { text: 'Diverting traffic to instances with higher capacity', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is the concept of the Elastic load balancer?',
                        options: [
                            { text: 'To distribute traffic to multiple EC2 instances', isCorrect: true },
                            { text: 'To scale up EC2 instances', isCorrect: false },
                            { text: 'To distribute traffic to AWS resources across multiple regions', isCorrect: false },
                            { text: 'To increase the size of the EC2 Instance based on demand', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is the concept of Autoscaling',
                        options: [
                            { text: 'To scale up resources based on demand', isCorrect: true },
                            { text: 'To distribute traffic to multiple EC2 instances', isCorrect: false },
                            { text: 'To distribute traffic to AWS resources across multiple regions', isCorrect: false },
                            { text: 'To increase the size of the EC2 Instance based on demand', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is used to derive the costs for moving artifacts from on premise to AWS?',
                        options: [
                            { text: 'AWS TCO calculator', isCorrect: true },
                            { text: 'AWS Config', isCorrect: false },
                            { text: 'AWS Cost Explorer', isCorrect: false },
                            { text: 'AWS Consolidated billing', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is the responsibility of the customer when ensuring that data on EBS volumes is left safe?',
                        options: [
                            { text: 'Creating EBS snapshots', isCorrect: true },
                            { text: 'Deleting the data when the device is destroyed', isCorrect: false },
                            { text: 'Attaching volumes to EC2 instances', isCorrect: false },
                            { text: 'Creating copies of EBS Volumes', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following can be used to call AWS services from  programming languages?',
                        options: [
                            { text: 'AWS SDK', isCorrect: true },
                            { text: 'AWS Console', isCorrect: false },
                            { text: 'AWS CLI', isCorrect: false },
                            { text: 'AWS IAM', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is the secure way of using AWS API to call AWS services from EC2 Instances?',
                        options: [
                            { text: 'IAM Roles', isCorrect: true },
                            { text: 'IAM Users', isCorrect: false },
                            { text: 'IAM Groups', isCorrect: false },
                            { text: 'IAM policies', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is a way that AWS allows linking accounts?',
                        options: [
                            { text: 'AWS Organizations', isCorrect: true },
                            { text: 'Cost Explorer', isCorrect: false },
                            { text: 'IAM', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following helps in DDOS protection?',
                        options: [
                            { text: 'Cloudfront, AWS Shield', isCorrect: true },
                            { text: 'AWS EC2', isCorrect: false },
                            { text: 'AWS Config', isCorrect: false },
                            { text: 'AWS Round53', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services can be used as a web application firewall in AWS.',
                        options: [
                            { text: 'AWS WAF', isCorrect: true },
                            { text: 'AWS EC2', isCorrect: false },
                            { text: 'AWS Firewall', isCorrect: false },
                            { text: 'AWS Protection', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'You want to add an extra layer of protection to the current authentication mechanism of user names and passwords for AWS. Which of the following can help in this regard?',
                        options: [
                            { text: 'Using MFA', isCorrect: true },
                            { text: 'Using Password Policies', isCorrect: false },
                            { text: 'Using a mix of user names', isCorrect: false },
                            { text: 'Using AWS WAF', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following disaster recovery deployment mechanisms has the lowest downtime?',
                        options: [
                            { text: 'Warm standby', isCorrect: true },
                            { text: 'Pilot light', isCorrect: false },
                            { text: 'Backup REstore', isCorrect: false },
                            { text: 'Devops', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services in AWS allows for object level storage on the cloud?',
                        options: [
                            { text: 'Amazon S3', isCorrect: true },
                            { text: 'Amazon EBS', isCorrect: false },
                            { text: 'Amazon Storage gateway', isCorrect: false },
                            { text: 'Amazon SQS', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following can be attached to EC2 Instances to store data?',
                        options: [
                            { text: 'Amazon EBS Volumes', isCorrect: true },
                            { text: 'Amazon EBS Snapshots', isCorrect: false },
                            { text: 'Amazon SQS', isCorrect: false },
                            { text: 'Amazon Glacier', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following networking components can be used to host EC2 resources in the AWS cloud?',
                        options: [
                            { text: 'AWS VPC', isCorrect: true },
                            { text: 'AWS Trusted Advisor', isCorrect: false },
                            { text: 'AWS Elastic Load Balancer', isCorrect: false },
                            { text: 'AWS Autoscaling', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company is planning to host resources in the AWS Cloud. They want to use services which can be used to decouple resources hosted on the cloud. Which of the following services can help fulfill this requirement?',
                        options: [
                            { text: 'AWS SQS', isCorrect: true },
                            { text: 'AWS EBS Volumes', isCorrect: false },
                            { text: 'AWS EBS Snapshots', isCorrect: false },
                            { text: 'AWS Glacier', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following components of the Cloudfront service can be used to distribute content to users across the globe?',
                        options: [
                            { text: 'Amazon Edge Locations', isCorrect: true },
                            { text: 'Amazon VPC', isCorrect: false },
                            { text: 'Amazon Regions', isCorrect: false },
                            { text: 'Amazon Availability Zones', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company is planning to move to the AWS Cloud. You need to give a presentation on the cost perspective when moving existing resources to the AWS Cloud. When it comes to Amazon EC2, which of the following is an advantage when it comes to the cost perspective:',
                        options: [
                            { text: 'The ability to only pay for what you use.', isCorrect: true },
                            { text: 'Having the ability of automated backups of the EC2 instance, so that you do not need to worry about the maintenance costs', isCorrect: false },
                            { text: 'The ability to choose low cost AMI to prepare the EC2 instances.', isCorrect: false },
                            { text: 'Ability to tag instances to reduce the overall cost.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company is planning on moving to the AWS Cloud. Once the movement to the Cloud is complete, they want to ensure that the right security settings are put in place. Which of the below tools can assist from a Security compliance?',
                        options: [
                            { text: 'AWS Inspector', isCorrect: true },
                            { text: 'AWS Support', isCorrect: false },
                            { text: 'AWS Kinesis', isCorrect: false },
                            { text: 'AWS EBS', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'There is a requirement to collect important metrics from AWS RDS and EC2 Instances. Which of the following services can help fulfill this requirement?',
                        options: [
                            { text: 'Amazon CloudWatch', isCorrect: true },
                            { text: 'Amazon CloudFront', isCorrect: false },
                            { text: 'Amazon CloudSearch', isCorrect: false },
                            { text: 'Amazon Config', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services can provide a complete audit trail of all AWS services used within an account?',
                        options: [
                            { text: 'AWS Cloud Trail Logs', isCorrect: true },
                            { text: 'AWS Trusted Advisor', isCorrect: false },
                            { text: 'Amazon EC2 instance usage report', isCorrect: false },
                            { text: 'Amazon CloudWatch', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services is most useful when a Disaster Recovery method is triggered in AWS.',
                        options: [
                            { text: 'Amazon Route 53', isCorrect: true },
                            { text: 'Amazon SNS', isCorrect: false },
                            { text: 'Amazon SQS', isCorrect: false },
                            { text: 'Amazon Inspector', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following can be used to work with AWS services in a programmatic manner?',
                        options: [
                            { text: 'AWS CLI', isCorrect: true },
                            { text: 'AWS Powershell', isCorrect: false },
                            { text: 'AWS Bash', isCorrect: false },
                            { text: 'AWS Console', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'When designing a system, you use the principle of "design for failure and nothing will fail." Which of the following services /features of AWS can NOT assist in supporting this design principle?',
                        options: [
                            { text: 'Pay as you go', isCorrect: true },
                            { text: 'Availability Zones', isCorrect: false },
                            { text: 'Regions', isCorrect: false },
                            { text: 'Elastic Load Balancer', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Currently your organization has an operational team that takes care of ID management in their on-premise data center. They now also need to manage users and groups created in AWS. Which of the following AWS tools would they need to use for performing this management function?',
                        options: [
                            { text: 'AWS Identity and Access Management (IAM)', isCorrect: true },
                            { text: 'AWS Config', isCorrect: false },
                            { text: 'AWS Cloud Trail', isCorrect: false },
                            { text: 'AWS Key Management Service (AWS KMS)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'You have a devops team in your current organization structure.They are keen to know if there is any service available in AWS which can be used to manage infrastructure as code.Which of the following can be met with such a requirement?',
                        options: [
                            { text: 'Using AWS Cloudformation', isCorrect: true },
                            { text: 'Using AWS Config', isCorrect: false },
                            { text: 'Using AWS Inspector', isCorrect: false },
                            { text: 'Using AWS Trusted Advisor', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services is a fully managed, petabyte-scale data warehouse service in the AWS cloud?',
                        options: [
                            { text: 'Amazon Redshift', isCorrect: true },
                            { text: 'Amazon DynamoDB', isCorrect: false },
                            { text: 'Amazon ElastiCache', isCorrect: false },
                            { text: 'Amazon Aurora', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is NOT the responsibility of AWS according to the Shared Security Model?',
                        options: [
                            { text: 'Managing AWS Identity and Access Management (IAM)', isCorrect: true },
                            { text: 'Securing edge locations', isCorrect: false },
                            { text: 'Monitoring physical device security', isCorrect: false },
                            { text: 'Implementing service organization Control (SOC) standards', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company has just started using the resources on the AWS cloud. They want to get an idea on the costs being incurred so far for the resources being used. How can this be achieved?',
                        options: [
                            { text: 'By using the AWS Cost and Usage reports Explorer. Here you can see the running and forecast costs.', isCorrect: true },
                            { text: 'By going to the Amazon EC2 dashboard. Here you can see the costs of the running EC2 resources.', isCorrect: false },
                            { text: 'By using the AWS Trusted Advisor dashboard.This dashboard will give you all the cost.', isCorrect: false },
                            { text: 'By seeing the AWS Cloud Trail logs.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'By default, who from the below roles has complete administrative control over all resources in the respective AWS account?',
                        options: [
                            { text: 'AWS Account Owner', isCorrect: true },
                            { text: 'AWS Support Team', isCorrect: false },
                            { text: 'AWS Security Team', isCorrect: false },
                            { text: 'AWS Technical Account Manager (TAM)', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your design team is planning to design an application that will be hosted on the AWS Cloud. One of their main non-functional requirements is given below. Reduce interdependencies so failures do not impact other components. Which of the following concepts does this requirement relate to?',
                        options: [
                            { text: 'Decoupling', isCorrect: true },
                            { text: 'Integration', isCorrect: false },
                            { text: 'Aggregation', isCorrect: false },
                            { text: 'Segregation', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following can be used to increase the fault tolerance of an application.',
                        options: [
                            { text: 'Deploying resources across multiple AvailabilityZones.', isCorrect: true },
                            { text: 'Deploying resources across multiple edge locations.', isCorrect: false },
                            { text: 'Deploying resources across multiple VPCs.', isCorrect: false },
                            { text: 'Deploying resources across multiple AWS accounts.', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following security requirements are NOT managed by AWS?',
                        options: [
                            { text: 'Password Policies', isCorrect: true },
                            { text: 'Physical security', isCorrect: false },
                            { text: 'Disk disposal', isCorrect: false },
                            { text: 'Hardware patching', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: "Which of the following terms relate to 'Creating systems that scale to the required capacity based on changes in demand'?",
                        options: [
                            { text: 'Elasticity', isCorrect: true },
                            { text: 'Disaster recovery', isCorrect: false },
                            { text: 'Decoupling', isCorrect: false },
                            { text: 'Aggregation', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company is planning to offload some of the batch processing workloads on AWS. These jobs can be interrupted and resumed at any time. Which of the following instance types would be the most cost effective to use for this purpose?',
                        options: [
                            { text: 'Spot', isCorrect: true },
                            { text: 'On-Demand', isCorrect: false },
                            { text: 'Full upfront reserved', isCorrect: false },
                            { text: 'Partial upfront reserved', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following needs a username and password to access AWS resources?',
                        options: [
                            { text: 'AWS Management Console', isCorrect: true },
                            { text: 'AWS Application Programming Interface (API)', isCorrect: false },
                            { text: 'AWS Software Development Kit (SDK)', isCorrect: false },
                            { text: 'AWS CLI', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company is planning to use the AWS Cloud. But there is a management decision that resources need to split department wise. And the decision is tending towards managing multiple AWS accounts. Which of the following would help in effective management and also provide an efficient costing model?',
                        options: [
                            { text: 'AWS organizations', isCorrect: true },
                            { text: 'Amazon Dev Pay', isCorrect: false },
                            { text: 'AWS Trusted Advisor', isCorrect: false },
                            { text: 'AWS Cost Explorer', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following can be used as an additional layer of security to use a username and password when logging into the AWS Console.',
                        options: [
                            { text: 'Multi-Factor Authentication (MFA)', isCorrect: true },
                            { text: 'Secondary password', isCorrect: false },
                            { text: 'Root access privileges', isCorrect: false },
                            { text: 'Secondary user name', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which AWS Cloud service helps in quick deployment of resources which can make use of different programming languages such as .Net and Java?',
                        options: [
                            { text: 'AWS Elastic Beanstalk', isCorrect: true },
                            { text: 'AWS Elastic Compute Cloud (Amazon EC2)', isCorrect: false },
                            { text: 'AWS VPC', isCorrect: false },
                            { text: 'AWS SQS', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company handles a crucial ecommerce application. This application needs to have an uptime of at least 99.5%. There is a decision to move the application to the AWS Cloud. Which of the following deployment strategies can help build a robust architecture for such an application?',
                        options: [
                            { text: 'Deploying the application across multiple Regions', isCorrect: true },
                            { text: 'Deploying the application across multiple VPCs', isCorrect: false },
                            { text: 'Deploying the application across Edge locations', isCorrect: false },
                            { text: 'Deploying the application across multiple subnets', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following initiatives from AWS helps organizations reduce the overall expenditure for IT companies when they host resources on the AWS Cloud?',
                        options: [
                            { text: 'They continually reduce the cost of cloud computing', isCorrect: true },
                            { text: 'The decommission older hardware', isCorrect: false },
                            { text: 'They use better security mechanisms so you dont need to think about security at all', isCorrect: false },
                            { text: 'They allow deployment of multiple resources', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'You are planning on deploying a video based application onto the AWS Cloud. These videos will be accessed by users across the world. Which of the below services can help stream the content in an efficient manner to the users across the globe?',
                        options: [
                            { text: 'Amazon CloudFront', isCorrect: true },
                            { text: 'Amazon SES', isCorrect: false },
                            { text: 'Amazon CloudTrail', isCorrect: false },
                            { text: 'Amazon S3', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is a fully managed NoSQL database service available in AWS?',
                        options: [
                            { text: 'AWS DynamoDB', isCorrect: true },
                            { text: 'AWS RDS', isCorrect: false },
                            { text: 'AWS Redshift', isCorrect: false },
                            { text: 'AWS MongoDB', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following storage options is best when you want to store archive data?',
                        options: [
                            { text: 'Amazon Glacier', isCorrect: true },
                            { text: 'Amazon Storage Gateway', isCorrect: false },
                            { text: 'Amazon EBS', isCorrect: false },
                            { text: 'Amazon S3', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'If there is a requirement to host EC2 Instances in the AWS Cloud wherein the utilization is guaranteed to be consistent for a long period of time, which of the following would you utilize to ensure costs are minimized?',
                        options: [
                            { text: 'Reserved instances', isCorrect: true },
                            { text: 'On-demand instances', isCorrect: false },
                            { text: 'Spot instances', isCorrect: false },
                            { text: 'Regular instances', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following services helps provide a dedicated connection from on-premise infrastructure to resources hosted in the AWS Cloud?',
                        options: [
                            { text: 'AWS Direct Connect', isCorrect: true },
                            { text: 'AWS VPC', isCorrect: false },
                            { text: 'AWS VPN', isCorrect: false },
                            { text: 'AWS Subnets', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following is not a category given by the AWS TrustedAdvisor?',
                        options: [
                            { text: 'High Availability', isCorrect: true },
                            { text: 'Security', isCorrect: false },
                            { text: 'Cost Optimization', isCorrect: false },
                            { text: 'Performance', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'A company is deploying a two-tier, highly available web application to AWS. The application needs a storage layer to store artifacts such as photos and videos. Which of the following services can be used as the underlying storage mechanism?',
                        options: [
                            { text: 'Amazon S3', isCorrect: true },
                            { text: 'Amazon EBS volume', isCorrect: false },
                            { text: 'Amazon EC2 instance store', isCorrect: false },
                            { text: 'Amazon RDS instance', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'When giving permission to users via the AWS Identity and Access Management tool, which of the following principles should be applied when granting permissions?',
                        options: [
                            { text: 'Principle of least privilege', isCorrect: true },
                            { text: 'Principle of greatest privilege', isCorrect: false },
                            { text: 'Principle of most privilege', isCorrect: false },
                            { text: 'Principle of lower privilege', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the below mentioned services is equivalent to hosting virtual servers on an on-premise location?',
                        options: [
                            { text: 'AWS EC2', isCorrect: true },
                            { text: 'AWS IAM', isCorrect: false },
                            { text: 'AWS Server', isCorrect: false },
                            { text: 'AWS Regions', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'You have a set of EC2 Instances hosted on the AWS Cloud. The EC2 Instances are hosting a web application. If you have a DDOS attack from the internet. Which of the following can help in reducing the overall threat to your EC2 Instances?',
                        options: [
                            { text: 'Usage of Network Access Control Lists', isCorrect: true },
                            { text: 'Usage of AWS Config', isCorrect: false },
                            { text: 'Usage of the Internet Gateway', isCorrect: false },
                            { text: 'Usage of AMI', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company currently uses VM Templates to spin up virtual machines on their on-premise infrastructure. Which of the following can be used in a similar way to spin up EC2 instances on the AWS Cloud?',
                        options: [
                            { text: 'Amazon Machines Images', isCorrect: true },
                            { text: 'EBS Volumes', isCorrect: false },
                            { text: 'EBS Snapshots', isCorrect: false },
                            { text: 'Amazon VMware', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the below cannot be used to get data onto Amazon Glacier?',
                        options: [
                            { text: 'AWS Console', isCorrect: true },
                            { text: 'AWS Glacier API', isCorrect: false },
                            { text: 'AWS Glacier SDK', isCorrect: false },
                            { text: 'AWS S3 Lifecycle policies', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Your company is planning to pay for an AWS Support plan. They have the following requirements as far as the support plan goes: A 24x7 access to Cloud Support Engineers via email, chat & phone, A response time of less than 1 hour for any critical faults. Which of the following plans will suffice keeping in mind the cost factor?',
                        options: [
                            { text: 'Enterprise', isCorrect: true },
                            { text: 'Basic', isCorrect: false },
                            { text: 'Developer', isCorrect: false },
                            { text: 'Business', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following are NOT features of an edge location. ',
                        options: [
                            { text: 'Distribute load across multiple resources', isCorrect: true },
                            { text: 'Distribute content to users', isCorrect: false },
                            { text: 'Cache common responses', isCorrect: false },
                            { text: 'Used in conjunction with the CloudFront service', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following storage options provides the option of Lifecycle policies that can be used to move objects to archive storage?',
                        options: [
                            { text: 'Amazon S3', isCorrect: true },
                            { text: 'Amazon Glacier', isCorrect: false },
                            { text: 'Amazon Storage Gateway', isCorrect: false },
                            { text: 'Amazon EBS', isCorrect: false }
                        ],
                        category: 2
                    },
                    {
                        questionText: 'Which of the following features of Amazon RDS allows for better availability of databases?',
                        options: [
                            { text: 'Multi-AZ', isCorrect: true },
                            { text: 'VPC Peering', isCorrect: false },
                            { text: 'Multi-Region', isCorrect: false },
                        ],
                        category: 2
                    },
                    {
                        questionText: 'There is a requirement to host a set of servers in the Cloud for a short period of 6 months. Which of the following types of instances should be chosen to be cost effective?',
                        options: [
                            { text: 'On-demand', isCorrect: true },
                            { text: 'Spot Instances', isCorrect: false },
                            { text: 'No upfront cost reserved', isCorrect: false },
                            { text: 'Partial upfront costs reserved', isCorrect: false }
                        ],
                        category: 2
                    },
                ];
                return [4 /*yield*/, quizModel_1["default"].deleteMany({ title: 'Synthetic AWS Exam' })];
            case 4:
                _a.sent();
                return [4 /*yield*/, quizModel_1["default"].create({
                        title: 'Synthetic AWS Exam',
                        description: 'A set of questions to review essential knowledge for AWS certification.',
                        price: 0
                    })];
            case 5:
                awsExamQuiz_1 = _a.sent();
                questionsWithQuizId = awsQuestions.map(function (question) { return (__assign(__assign({}, question), { quizId: awsExamQuiz_1._id })); });
                return [4 /*yield*/, questionModel_1["default"].insertMany(questionsWithQuizId)];
            case 6:
                insertedQuestions = _a.sent();
                console.log('Inserted AWS Exam questions:', insertedQuestions);
                // Update Quiz with questions
                return [4 /*yield*/, quizModel_1["default"].findByIdAndUpdate(awsExamQuiz_1._id, {
                        $push: { questions: { $each: insertedQuestions.map(function (q) { return q._id; }) } }
                    })];
            case 7:
                // Update Quiz with questions
                _a.sent();
                console.log('AWS Exam quiz created successfully.');
                return [3 /*break*/, 11];
            case 8:
                err_1 = _a.sent();
                console.error('Error creating AWS Exam quiz:', err_1);
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, mongoose_1["default"].disconnect()];
            case 10:
                _a.sent();
                console.log('Database disconnected');
                return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
createAWSExam();
