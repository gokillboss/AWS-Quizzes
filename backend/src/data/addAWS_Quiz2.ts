import mongoose from 'mongoose';
import Quiz from '../models/quizModel';
import Question from '../models/questionModel';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface AWSQuestion {
  questionText: string;
  options: Option[];
  category: number;
  quizId?: mongoose.Types.ObjectId;
}

const connectDB = async () => {
  const uri = 'mongodb://127.0.0.1:27017/AWS_Quiz';
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createAWSExam = async () => {
  await connectDB();

  try {
    const awsQuestions: AWSQuestion[] = [
      {
        questionText: 'There is a requirement to host a set of servers in the Cloud for a short period of 6 months. Which of the following types of instances should be chosen to be cost effective?',
        options: [
          { text: 'On-demand', isCorrect: true },
          { text: 'Spot Instances', isCorrect: false },
          { text: 'No upfront cost reserved', isCorrect: false },
          { text: 'Partial upfront costs reserved', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following from AWS can be used to transfer petabytes of data from on-premise locations to the AWS Cloud.',
        options: [
          { text: 'AWS Snowball', isCorrect: true },
          { text: 'AWS Import/Export', isCorrect: false },
          { text: 'AWS EC2', isCorrect: false },
          { text: 'AWS Transfer', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'When working with the AWS Cloud, which of the following are headaches you dont need to worry about? ',
        options: [
          { text: 'Having the pay as you go model, so you dont need to worry if you are burning costs for non-running resources.', isCorrect: true },
          { text: 'Having no worry about hardware management', isCorrect: false },
          { text: 'Having no need to worry about security', isCorrect: false },
          { text: 'Having complete control over the physical infrastructure, so you dont need to worry about what AWS is doing.', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Your company wants to move from an existing Oracle database to the AWS Cloud. Which of the following services can help facilitate this move?',
        options: [
          { text: 'AWS Database Migration Service', isCorrect: true },
          { text: 'AWS VM Migration Service', isCorrect: false },
          { text: 'AWS Inspector', isCorrect: false },
          { text: 'AWS Trusted Advisor', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: ' Which of the following features of AWS RDS allows for offloading reads of the database?',
        options: [
          { text: 'Creating read replica', isCorrect: true },
          { text: 'Cross region replication', isCorrect: false },
          { text: 'Using snapshots', isCorrect: false },
          { text: 'Using Multi-AZ feature', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: ' Which of the following terms refers to another geographic location in AWS?',
        options: [
          { text: 'Region', isCorrect: true },
          { text: 'Edge location', isCorrect: false },
          { text: 'Availability Zone', isCorrect: false },
          { text: 'Data center', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company wants to have a database hosted on AWS. As much as possible they want to have control over the database itself. Which of the following would be an ideal option for this?',
        options: [
          { text: 'Hosting on the database on an EC2 Instance', isCorrect: true },
          { text: 'Using the AWS DynamoDB service', isCorrect: false },
          { text: 'Using the AWS RDS service', isCorrect: false },
          { text: 'Using the Amazon Aurora service', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company currently has an application which costs of a .Net layer which connects to a MySQL database. They now want to move this application onto AWS. They want to make use of all AWS features such as high availability and automated backups. Which of the following would be an ideal database in AWS to migrate to for this requirement?',
        options: [
          { text: 'Aurora', isCorrect: true },
          { text: 'DynamoDB', isCorrect: false },
          { text: 'An EC2 instance with MySQL installed', isCorrect: false },
          { text: 'An EC2 instance with Aurora installed', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following statements are FALSE when it comes to elasticity? ',
        options: [
          { text: 'Diverting traffic across multiple regions', isCorrect: true },
          { text: 'Diverting traffic to instances based on the demand', isCorrect: false },
          { text: 'Diverting traffic to instances with the least load', isCorrect: false },
          { text: 'Diverting traffic to instances based on the CPU needed', isCorrect: false }
         
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following services relates to the concept of "Distributing traffic to multiple EC2 Instances?"',
        options: [
          { text: 'Elastic Load Balancer', isCorrect: true },
          { text: 'AutoScaling', isCorrect: false },
          { text: 'VPC', isCorrect: false },
          { text: 'Subnets', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following services relates to the concept of "Scaling up resources based on demand?"',
        options: [
          { text: 'AutoScaling', isCorrect: true },
          { text: 'Elastic Load Balancer', isCorrect: false },
          { text: 'VPC', isCorrect: false },
          { text: 'Subnets', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company is planning to migrate their existing AWS Services to the Cloud. Which of the following would help them do a cost benefit analysis of moving to the AWS Cloud.',
        options: [
          { text: 'AWS TCO calculator', isCorrect: true },
          { text: 'AWS Config', isCorrect: false },
          { text: 'AWS Cost Explorer', isCorrect: false },
          { text: 'AWS Consolidated billing', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following does AWS perform on its behalf for EBS volumes to make it less prone to failure?',
        options: [
          { text: 'Replication of the volume in the same Availability Zone', isCorrect: true },
          { text: 'Replication of the volume across Availability Zones', isCorrect: false },
          { text: 'Replication of the volume across Regions', isCorrect: false },
          { text: ' Replication of the volume across Edge Locations', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You have a set of developers that need to use .Net to call AWS Services.Which of the following tools can be used to achieve this purpose?',
        options: [
          { text: 'AWS SDK', isCorrect: true },
          { text: 'AWS Console', isCorrect: false },
          { text: 'AWS CLI', isCorrect: false },
          { text: 'AWS IAM', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You have an EC2 Instance in development that interacts with the Simple Storage Service. The EC2 Instance is going to be promoted to the production environment. Which of the following features should be used for secure communication between the EC2 Instance and the Simple Storage Service.',
        options: [
          { text: 'IAM Roles', isCorrect: true },
          { text: 'IAM Users', isCorrect: false },
          { text: 'IAM Groups', isCorrect: false },
          { text: 'IAM Policies', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following can be used to view one bill when you have multiple AWS accounts?',
        options: [
          { text: 'Consolidated Billing', isCorrect: true },
          { text: 'Combined Billing', isCorrect: false },
          { text: 'Cost Explorer', isCorrect: false },
          { text: 'IAM', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: ' Your company is planning to host a large ecommerce application on the AWS Cloud. One of their major concerns is Internet attacks such as DDOS attacks. Which of the following services can help mitigate this concern? ',
        options: [
          { text: 'AWS Shield, AWS EC2', isCorrect: true },
          { text: 'Cloudfront', isCorrect: false },
          { text: 'AWS Config', isCorrect: false },
          { text: 'AWS S3', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following services is a serverless computer service in AWS? Which of the following services is a serverless computer service in AWS?',
        options: [
          { text: 'AWS Lambda', isCorrect: true },
          { text: 'AWS EC2', isCorrect: false },
          { text: 'AWS Config', isCorrect: false },
          { text: 'AWS Opswork', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following are services where you dont need to manage the underlying Infrastructure?',
        options: [
          { text: 'DynamoDB', isCorrect: true },
          { text: 'EC2', isCorrect: false },
          { text: 'AWS Autoscaling', isCorrect: false },
          { text: 'EBS', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following disaster recovery deployment mechanisms has the highest downtime?',
        options: [
          { text: 'Backup and Restore', isCorrect: true },
          { text: 'Pilot light', isCorrect: false },
          { text: 'Warm standby', isCorrect: false },
          { text: 'Multi Site', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following services allows you to analyze EC2 Instances against predefined security templates to check for vulnerabilities?',
        options: [
          { text: 'AWS Inspector', isCorrect: true },
          { text: 'AWS Trusted Advisor', isCorrect: false },
          { text: 'AWS WAF', isCorrect: false },
          { text: 'AWS Shield', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following storage mechanisms can be used to store messages effectively which can be used across distributed systems?',
        options: [
          { text: 'Amazon SQS', isCorrect: true },
          { text: 'Amazon Glacier', isCorrect: false },
          { text: 'Amazon EBS Volumes', isCorrect: false },
          { text: 'Amazon EBS Snapshots', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You are exploring what services AWS has off-hand. You have a large number of data sets that need to be processed.Which of the following services can help fulfill this requirement?',
        options: [
          { text: 'EMR', isCorrect: true },
          { text: 'S3', isCorrect: false },
          { text: 'Glacier', isCorrect: false },
          { text: 'Storage Gateway', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which one of the following features is normally present in all of the AWS Support plans?',
        options: [
          { text: '24*7 access to customer support', isCorrect: true },
          { text: 'Access to all features in the Trusted Advisor', isCorrect: false },
          { text: 'A technical Account Manager', isCorrect: false },
          { text: 'A dedicated support person', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You are planning to serve a web application on the AWS Platform by using EC2 Instances. Which of the below principles would you adopt to ensure that even if some of the EC2 Instances crashes, you still have a working application?',
        options: [
          { text: 'Using a fault tolerant system', isCorrect: true },
          { text: 'Using a scalable system', isCorrect: false },
          { text: 'Using an elastic system', isCorrect: false },
          { text: 'Using a regional system', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following options would entice a company to use AWS over an on-premises data center?',
        options: [
          { text: 'Having a highly available infrastructure', isCorrect: true },
          { text: 'Having access to Free and Unlimited Storage', isCorrect: false },
          { text: 'Having access to Unlimited Physical servers', isCorrect: false },
         
        ],
        category: 2,
      },
      {
        questionText: 'What AWS service has built-in DDOS mitigation?',
        options: [
          { text: 'CloudFront', isCorrect: true },
          { text: 'CloudTrail', isCorrect: false },
          { text: 'EC2', isCorrect: false },
          { text: 'CloudWatch', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You have 2 accounts in your AWS account. One for the Dev and the other for QA. All are part of consolidated billing. The master account has purchased 3 reserved instances. The Dev department is currently using 2 reserved instances. The QA team is planning on using 3 instances of the same instance type. What is the pricing tier of the instances that can be used by the QA Team?',
        options: [
          { text: 'One Reserved and 2 on-demand', isCorrect: true },
          { text: 'No Reserved and 3 on-demand', isCorrect: false },
          { text: 'Two Reserved and 1 on-demand', isCorrect: false },
          { text: 'Three Reserved and NO on-demand', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following are the right principles when designing cloud based systems?',
        options: [
          { text: 'Build loosely-coupled components', isCorrect: true },
          { text: 'Build tightly-coupled components', isCorrect: false },
          { text: 'Use as many services as possible', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following AWS services can assist you with cost optimization?',
        options: [
          { text: 'AWS Trusted Advisor', isCorrect: true },
          { text: 'AWS Shield', isCorrect: false },
          { text: 'AWS Inspector', isCorrect: false },
          { text: 'AWS WAF', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following is the amount of storage that can be stored in the Simple Storage service?',
        options: [
          { text: 'Virtually unlimited storage', isCorrect: true },
          { text: '1 TB', isCorrect: false },
          { text: '5 TB', isCorrect: false },
          { text: '1 PB', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which services allow the customer to retain full administrative privileges of the underlying virtual infrastructure?',
        options: [
          { text: 'Amazon EC2', isCorrect: true },
          { text: 'Amazon S3', isCorrect: false },
          { text: 'Amazon Lambda', isCorrect: false },
          { text: 'Amazon DynamoDB', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following AWS services should you use to migrate an existing database to AWS?',
        options: [
          { text: 'AWS DMS', isCorrect: true },
          { text: 'AWS Lambda', isCorrect: false },
          { text: 'AWS Storage Gateway', isCorrect: false },
          { text: 'AWS Snowball', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You have a mission-critical application which must be globally available at all times. If this is the case, which of the below deployment mechanisms would you employ?',
        options: [
          { text: 'Deployment to multiple Regions', isCorrect: true },
          { text: 'Deployment to multiple edge locations', isCorrect: false },
          { text: 'Deployment to multiple Availability Zones', isCorrect: false },
          { text: 'Deployment to multiple Data Centers', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following is a serverless computer offering from AWS?',
        options: [
          { text: 'AWS Lambda', isCorrect: true },
          { text: 'AWS EC2', isCorrect: false },
          { text: 'AWS SNS', isCorrect: false },
          { text: 'AWS SQS', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following allows you to carve out a portion of the AWS Cloud?',
        options: [
          { text: 'AWS VPC', isCorrect: true },
          { text: 'AWS Subnets', isCorrect: false },
          { text: 'AWS Regions', isCorrect: false },
          { text: 'AWS Availability Zones', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'In order to predict the cost of moving resources from on-premise to the cloud, which of the following can be used?',
        options: [
          { text: 'AWS TCO', isCorrect: true },
          { text: 'AWS Inspector', isCorrect: false },
          { text: 'AWS WAF', isCorrect: false },
          { text: 'AWS Trusted Advisor', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What is the concept of an AWS region?',
        options: [
          { text: 'It is a geographical area divided into Availability Zones', isCorrect: true },
          { text: 'It is a collection of Edge locations', isCorrect: false },
          { text: 'It is a collection of Compute capacity', isCorrect: false },
          { text: 'It is the same as an Availability Zone', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: "In AWS, which security aspects are NOT the customer's responsibility?",
        options: [
          { text: 'Decommissioning storage devices', isCorrect: true },
          { text: 'Security Group and ACL (Access Control List) settings', isCorrect: false },
          { text: "Patch management on the EC2 instance's operating system", isCorrect: false },
          { text: 'Encryption of EBS (Elastic Block Storage) volumes', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following can be used to manage identities in AWS?',
        options: [
          { text: 'AWS IAM', isCorrect: true },
          { text: 'AWS config', isCorrect: false },
          { text: 'AWS Trusted Advisor', isCorrect: false },
          { text: 'AWS', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following is a best practice when A working with permission in AWS?',
        options: [
          { text: 'Ensure the least privilege access is used', isCorrect: true },
          { text: 'Use the root account credentials', isCorrect: false },
          { text: "Don't use IAM users and groups", isCorrect: false },
          { text: 'Ensure the highest privilege access is used', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What is the ability provided by AWS to enable very fast, easy, and secure transfers of files over long distances between your client and your Amazon S3 bucket?',
        options: [
          { text: 'Transfer Acceleration', isCorrect: true },
          { text: 'File Transfer', isCorrect: false },
          { text: 'HTTP Transfer', isCorrect: false },
          { text: 'S3 Acceleration  ', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'When working on the costing for on-demand EC2 instances, which of the following are NOT attributes which determine the costing of the EC2 Instance?',
        options: [
          { text: 'Edge Location', isCorrect: true },
          { text: 'Instance Type', isCorrect: false },
          { text: 'AMI Type', isCorrect: false },
          { text: 'Region', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company wants to utilize AWS storage. For them low storage cost is paramount, the data is rarely retrieved, and data retrieval times of several hours are acceptable for them. What is the best storage option to use?',
        options: [
          { text: 'AWS Glacier', isCorrect: true },
          { text: 'AWS S3 Reduced Redundancy Storage', isCorrect: false },
          { text: 'EBS backed storage connected to EC2', isCorrect: false },
          { text: 'AWS CloudFront', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'S3 allows you to store objects of virtually unlimited size.',
        options: [
          { text: 'S3 allows you to store unlimited amounts of data.', isCorrect: true },
          { text: 'S3 allows you to store objects of virtually unlimited size.', isCorrect: false },
          { text: 'S3 should be used to host a relational database.', isCorrect: false },
         
        ],
        category: 2,
      },
      {
        questionText: 'What is the AWS service provided which provides a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.',
        options: [
          { text: 'DynamoDB', isCorrect: true },
          { text: 'AWS RDS', isCorrect: false },
          { text: 'Oracle RDS', isCorrect: false },
          { text: 'Elastic Map Reduce', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You want to monitor the CPU utilization of an EC2 resource in AWS. Which of the below services can help in this regard?',
        options: [
          { text: 'AWS Cloudwatch', isCorrect: true },
          { text: 'AWS CloudTrail', isCorrect: false },
          { text: 'AWS Inspector', isCorrect: false },
          { text: 'AWS Trusted Advisor', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company is deploying a 2-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower Overall CPU resources for the web tier?',
        options: [
          { text: 'Amazon S3', isCorrect: true },
          { text: 'Amazon EBS volume', isCorrect: false },
          { text: 'Amazon EC2 instance store', isCorrect: false },
          { text: 'Amazon RDS instance', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service allows for distribution of incoming application traffic across multiple EC2 instances?',
        options: [
          { text: 'AWS ELB', isCorrect: true },
          { text: 'AWS EC2', isCorrect: false },
          { text: 'AWS Autoscaling', isCorrect: false },
          { text: 'AWS Inspector', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the below AWS services allow you to base the number of resources on the demand of the application or users?',
        options: [
          { text: 'AWS AutoScaling', isCorrect: true },
          { text: 'AWS EC2', isCorrect: false },
          { text: 'AWS ELB', isCorrect: false },
          { text: 'AWS Inspector', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following AWS managed database services provides processing power that is up to 5X faster than a traditional MySQL atabase?',
        options: [
          { text: 'Aurora', isCorrect: true },
          { text: 'MariaDB', isCorrect: false },
          { text: 'PostgreSQL', isCorrect: false },
          { text: 'DynamoDB', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following AWS services allows you to build a data warehouse on the cloud?',
        options: [
          { text: 'AWS Redshift', isCorrect: true },
          { text: 'AWS EMR', isCorrect: false },
          { text: 'AWS Storage Gateway', isCorrect: false },
          { text: 'AWS Snowball', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following services helps in governance, compliance, and risk auditing in AWS?',
        options: [
          { text: 'AWS Cloudtrail', isCorrect: true },
          { text: 'AWS Config', isCorrect: false },
          { text: 'AWS Cloudwatch', isCorrect: false },
          { text: 'AWS SNS', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'When using On-Demand instances in AWS, which of the following is a false statement when it comes to the costing for the instance?',
        options: [
          { text: 'You have to pay the termination fees if you terminate the instance', isCorrect: true },
          { text: 'You pay no upfront costs for the instance', isCorrect: false },
          { text: 'You are charged per second based on the hourly rate', isCorrect: false },
          { text: 'You pay for as much as you use', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'AWS provides a storage option known as Amazon Glacier. What is this AWS service designed for?',
        options: [
          { text: 'Infrequently accessed data', isCorrect: true },
          { text: 'Cached session data', isCorrect: false },
          { text: 'Active database storage', isCorrect: false },
        
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following is not a supported database in the AWS RDS service?',
        options: [
          { text: 'DB2', isCorrect: true },
          { text: 'Aurora', isCorrect: false },
          { text: 'MariaDB', isCorrect: false },
          { text: 'MySQL', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'There is a requirement to move a 10 TB data warehouse to the AWS cloud. Which of the following is ideal service which can be used to move this amount of data to the AWS cloud',
        options: [
          { text: 'Amazon Snowball', isCorrect: true },
          { text: 'Amazon Direct Connect', isCorrect: false },
          { text: 'Amazon S3 MultiPart UPload', isCorrect: false },
          { text: 'Amazon S3 Connector', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What is the key difference between an availability zone and an edge location?',
        options: [
          { text: 'An availability zone is an Amazon resource within an AWS region, whereas an edge location will deliver cached content to the content to the closest location to reduce latency.', isCorrect: true },
          { text: 'An availability zone is a grouping of AWS resources from a specific region; an edge location is a specific resource within the AWS region. ', isCorrect: false },
          { text: 'Edge locations are used as control stations for AWS resources', isCorrect: false },
          { text: 'None of those', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following security features is associated with a Subnet in a VPC to protect against Incoming traffic requests?',
        options: [
          { text: 'NACL', isCorrect: true },
          { text: 'AWS Inspector', isCorrect: false },
          { text: 'Subnet Groups', isCorrect: false },
          { text: 'Security Groups', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'In AWS billing what option can be used to ensure costs can be reduced if you have multiple accounts?',
        options: [
          { text: 'Consolidated billing', isCorrect: true },
          { text: 'Combined billing', isCorrect: false },
          { text: 'Costs are automatically reduced for multiple account by AWS', isCorrect: false },
          { text: 'It is not possible to reduce costs with multiple accounts', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You have a Web application hosted in an EC2 Instance that needs to send notifications based on events. Which of the below services can assist in sending notifications?',
        options: [
          { text: 'AWS SNS', isCorrect: true },
          { text: 'AWS SES', isCorrect: false },
          { text: 'AWS SQS', isCorrect: false },
          { text: 'AWS EC2', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What is a document that provides a formal statement of one or more permissions?',
        options: [
          { text: 'Policy', isCorrect: true },
          { text: 'Permission', isCorrect: false },
          { text: 'Role', isCorrect: false },
          { text: 'Resource', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What acts as a firewall that controls the traffic allowed to reach one or more instances?',
        options: [
          { text: 'Secirity Group', isCorrect: true },
          { text: 'ACL', isCorrect: false },
          { text: 'IAM', isCorrect: false },
         
        ],
        category: 2,
      },
      {
        questionText: "Which of the following are benefits of the AWS's Relational Database Service (RDS)?",
        options: [
          { text: 'Automated patches and backups', isCorrect: true },
          { text: 'It allows you to store unstructured data', isCorrect: false },
          { text: 'It allows you to store NoSQL data', isCorrect: false },
          
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service uses Edge Locations for content caching?',
        options: [
          { text: 'AWS CloudFront', isCorrect: true },
          { text: 'AWS SNS', isCorrect: false },
          { text: 'AWS SQS', isCorrect: false },
          { text: 'AWS Inspector', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company wants to create standard templates for deployment of their infrastructure. Which AWS service can be used in this regard?',
        options: [
          { text: 'AWS Cloud Formation', isCorrect: true },
          { text: 'Amazon Simple Workflow Service', isCorrect: false },
          { text: 'AWS Elastic Beanstalk', isCorrect: false },
          { text: 'AWS OpsWorks', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'You have a distributed application that periodically processes large volumes of data across multiple Amazon EC2 Instances. The application is designed to recover gracefully from Amazon EC2 instance failures. You are required to accomplish this task in the most cost-effective way. Which of the following will meet your requirements?',
        options: [
          { text: 'Spot Instances', isCorrect: true },
          { text: 'Reserved Instances', isCorrect: false },
          { text: 'Dedicated Instances', isCorrect: false },
          { text: 'On-Demand Instances', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What is the service provided by AWS that lets  you host Domain Name systems?',
        options: [
          { text: 'Route 53', isCorrect: true },
          { text: 'VPC', isCorrect: false },
          { text: 'Direct Connect', isCorrect: false },
          { text: 'VPN', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What is the service provided by AWS that allows developers to easily deploy and manage applications on the cloud?',
        options: [
          { text: 'Elastic BeanStalk', isCorrect: true },
          { text: 'CloudFormation', isCorrect: false },
          { text: 'Opsworks', isCorrect: false },
          { text: 'Container Service', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: "A company is deploying a new two-tier web application in AWS. The company wants to store their most frequently used data so that the response time for the application is improved. Which AWS service provides the solution for the company's requirements?",
        options: [
          { text: 'Amazon ElastiCache', isCorrect: true },
          { text: 'Amazon RDS for MySQL with Multi-AZ', isCorrect: false },
          { text: 'MySQL Installed on 2 Amazon EC2 instances in a single Availability Zone', isCorrect: false },
          { text: 'Amazon DynamoDB', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'If you wanted to take a backup of an EBS Volume, what would you do?',
        options: [
          { text: 'Create an EBS snapshot', isCorrect: true },
          { text: 'Store the EBS volume in S3', isCorrect: false },
          { text: 'Store the EBS volume in an RDS database', isCorrect: false },
          { text: 'Store the EBS volume in DynamoDB', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What does Amazon EC2 provide?',
        options: [
          { text: 'Virtual servers in the cloud', isCorrect: true },
          { text: 'A platform to run code (Java, PHP, Python), paying on an hourly basis', isCorrect: false },
          { text: 'Computer clusters in the cloud', isCorrect: false },
          { text: 'Physical servers, remotely managed by the customer', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following options of AWS RDS allows for AWS to failover to a secondary database in cae the primary one fails',
        options: [
          { text: 'AWS Multi-AZ', isCorrect: true },
          { text: 'AWS Failover', isCorrect: false },
          { text: 'AWS Secondary', isCorrect: false },
          { text: 'AWS Standby', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What service from AWS can help manage the costs for all resources in AWS?',
        options: [
          { text: 'Cost Explorer', isCorrect: true },
          { text: 'Cost Allocation Tags', isCorrect: false },
          { text: 'AWS Consolidated billing', isCorrect: false },
          { text: 'Payment History', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What service helps you to aggregate logs from your EC2 instance?',
        options: [
          { text: 'Cloudwatch Logs', isCorrect: true },
          { text: 'SQS', isCorrect: false },
          { text: 'Cloudtrail', isCorrect: false },
          { text: 'S3', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following items allows an application deployed on an EC2 instance to write data to S3 in a secure manager?',
        options: [
          { text: 'AWS IAM Roles', isCorrect: true },
          { text: 'AWS IAMUsers', isCorrect: false },
          { text: 'AWS IAM Groups', isCorrect: false },
          { text: 'AWS IAM Permission', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'What are the four levels of AWS Premium Support?',
        options: [
          { text: 'Basic, Developer, Business Enterprise', isCorrect: true },
          { text: 'Basic, Startup, Business, Enterprise', isCorrect: false },
          { text: 'Free, Bronze, Silver, Gold', isCorrect: false },
          { text: 'All support is free', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'A company does not want to manage their database. Which of the following services is a fully managed NoSQL database provided by AWS.',
        options: [
          { text: 'DynamoDB', isCorrect: true },
          { text: 'AWS RDS', isCorrect: false },
          { text: 'Oracle RDS', isCorrect: false },
          { text: 'Elastic Map Reduce', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following are attributes to the costing for using the Simple Storage Service?',
        options: [
          { text: 'The storage class used for the objects stored.', isCorrect: true },
          { text: 'Number of S3 buckets', isCorrect: false },
          { text: 'Using encryption in S3.', isCorrect: false },
          
        ],
        category: 2,
      },
      {
        questionText: 'If you want to develop an application in Java, which of the following tools would you use?',
        options: [
          { text: 'AWS SDK', isCorrect: true },
          { text: 'AWS Powershell', isCorrect: false },
          { text: 'AWS CLI', isCorrect: false },
          { text: 'AWS Console', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following services helps provide a connection from on-premise infrastructure to resources hosted in the AWS Cloud',
        options: [
          { text: 'AWS VPN', isCorrect: true },
          { text: 'AWS VPC', isCorrect: false },
          { text: 'AWS Subnets', isCorrect: false },
          
        ],
        category: 2,
      },
      {
        questionText: 'You want to take a snapshot of an EC2 instance and create a new instance out of it. In AWS what is the snapshot equivalent to?',
        options: [
          { text: 'Amazon Machine Image (AMI)', isCorrect: true },
          { text: 'EBS Volumes', isCorrect: false },
          { text: 'EC2 Snapshot', isCorrect: false },
          { text: 'EBS Snapshot', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'There is a requirement to host a set of servers in the Cloud for a short period of 3 months. Which of the following types of instances should be chosen to be cost effective?',
        options: [
          { text: 'On-demand', isCorrect: true },
          { text: 'Spot Instances', isCorrect: false },
          { text: 'No Upfront costs Reserved', isCorrect: false },
          { text: 'Partial Upfront costs Reserved', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following concepts is used when you want to manage the bills for multiple accounts under one master account?',
        options: [
          { text: 'Consolidation billing', isCorrect: true },
          { text: 'Combined billing', isCorrect: false },
          { text: 'Cost explorer', isCorrect: false },
          { text: 'IAM', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which of the following is not a disaster recovery deployment technique',
        options: [
          { text: 'Single site', isCorrect: true },
          { text: 'Pilot light', isCorrect: false },
          { text: 'Warm standby', isCorrect: false },
          { text: 'Mult-site', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: "You have multiple Docker-based applications hosted on-premises that you want to migrate to  AWS. You don't want to provision or manage any infrastructure, you just want to run your  containers on AWS. Which AWS service should you choose?",
        options: [
          { text: 'AWS Fargate', isCorrect: true },
          { text: 'Elastic Container Service (ECS)', isCorrect: false },
          { text: 'Elastic Container Registry (ECR)', isCorrect: false },
          { text: 'Elastic Kubernetes Service (EKS)', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service allows you to store Docker images in AWS?',
        options: [
          { text: 'Elastic Container Registry (ECR)', isCorrect: true },
          { text: 'Amazon S3', isCorrect: false },
          { text: 'Elastic Container Service (ECS)', isCorrect: false },
          { text: 'AWS CodeCommit', isCorrect: false }
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service is primarily used for object storage?',
        options: [
          { text: 'Amazon S3', isCorrect: true },
          { text: 'Amazon EC2', isCorrect: false },
          { text: 'Amazon RDS', isCorrect: false },
          { text: 'Amazon EBS', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is the primary purpose of Amazon CloudFront?',
        options: [
          { text: 'Content Delivery Network (CDN)', isCorrect: true },
          { text: 'Database management', isCorrect: false },
          { text: 'Compute service', isCorrect: false },
          { text: 'Monitoring and logging', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service is used to manage infrastructure as code?',
        options: [
          { text: 'AWS CloudFormation', isCorrect: true },
          { text: 'AWS Config', isCorrect: false },
          { text: 'AWS IAM', isCorrect: false },
          { text: 'AWS CloudTrail', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What does Amazon RDS provide?',
        options: [
          { text: 'Managed relational databases', isCorrect: true },
          { text: 'Object storage', isCorrect: false },
          { text: 'Serverless compute', isCorrect: false },
          { text: 'Content delivery', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service offers serverless compute?',
        options: [
          { text: 'AWS Lambda', isCorrect: true },
          { text: 'Amazon EC2', isCorrect: false },
          { text: 'Amazon ECS', isCorrect: false },
          { text: 'Amazon DynamoDB', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is the maximum size of an S3 object?',
        options: [
          { text: '5TB', isCorrect: true },
          { text: '1TB', isCorrect: false },
          { text: '100GB', isCorrect: false },
          { text: '10TB', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which service helps track API usage across AWS accounts?',
        options: [
          { text: 'AWS CloudTrail', isCorrect: true },
          { text: 'AWS X-Ray', isCorrect: false },
          { text: 'Amazon CloudWatch', isCorrect: false },
          { text: 'AWS Config', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is an AWS Availability Zone?',
        options: [
          { text: 'A distinct data center within a region', isCorrect: true },
          { text: 'A geographic area of AWS services', isCorrect: false },
          { text: 'A backup solution for instances', isCorrect: false },
          { text: 'A reserved compute zone', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which database service supports NoSQL?',
        options: [
          { text: 'Amazon DynamoDB', isCorrect: true },
          { text: 'Amazon RDS', isCorrect: false },
          { text: 'Amazon Redshift', isCorrect: false },
          { text: 'Amazon Neptune', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service enables easy file transfer to the cloud?',
        options: [
          { text: 'AWS Snowball', isCorrect: true },
          { text: 'AWS CloudTrail', isCorrect: false },
          { text: 'AWS Storage Gateway', isCorrect: false },
          { text: 'Amazon Glacier', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is the purpose of Amazon VPC?',
        options: [
          { text: 'To create isolated cloud resources', isCorrect: true },
          { text: 'To manage DNS settings', isCorrect: false },
          { text: 'To secure object storage', isCorrect: false },
          { text: 'To manage relational databases', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service can be used for monitoring and observability?',
        options: [
          { text: 'Amazon CloudWatch', isCorrect: true },
          { text: 'AWS X-Ray', isCorrect: false },
          { text: 'AWS Trusted Advisor', isCorrect: false },
          { text: 'AWS Cost Explorer', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service provides scalable DNS?',
        options: [
          { text: 'Amazon Route 53', isCorrect: true },
          { text: 'AWS Direct Connect', isCorrect: false },
          { text: 'Amazon Lightsail', isCorrect: false },
          { text: 'AWS Elastic Beanstalk', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is a primary benefit of using AWS Auto Scaling?',
        options: [
          { text: 'Automatically adjusts resources based on demand', isCorrect: true },
          { text: 'Provides database backups', isCorrect: false },
          { text: 'Manages DNS resolution', isCorrect: false },
          { text: 'Improves security settings', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is an AWS Elastic IP address?',
        options: [
          { text: 'A static IP address for dynamic cloud computing', isCorrect: true },
          { text: 'A private IP address within a VPC', isCorrect: false },
          { text: 'A default IP for all AWS accounts', isCorrect: false },
          { text: 'A DNS configuration for S3', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which AWS service simplifies machine learning deployment?',
        options: [
          { text: 'Amazon SageMaker', isCorrect: true },
          { text: 'AWS Glue', isCorrect: false },
          { text: 'AWS Batch', isCorrect: false },
          { text: 'Amazon EMR', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What is the purpose of AWS Trusted Advisor?',
        options: [
          { text: 'To provide best practice recommendations', isCorrect: true },
          { text: 'To monitor instance usage', isCorrect: false },
          { text: 'To optimize storage cost', isCorrect: false },
          { text: 'To deliver managed compute services', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which service supports container orchestration?',
        options: [
          { text: 'Amazon ECS', isCorrect: true },
          { text: 'Amazon CloudFront', isCorrect: false },
          { text: 'AWS Auto Scaling', isCorrect: false },
          { text: 'AWS IAM', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'What does AWS Identity and Access Management (IAM) do?',
        options: [
          { text: 'Manages access to AWS services and resources', isCorrect: true },
          { text: 'Monitors and logs account activity', isCorrect: false },
          { text: 'Manages data storage costs', isCorrect: false },
          { text: 'Scales cloud resources automatically', isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: 'Which service enables real-time streaming of data?',
        options: [
          { text: 'Amazon Kinesis', isCorrect: true },
          { text: 'AWS Batch', isCorrect: false },
          { text: 'Amazon EMR', isCorrect: false },
          { text: 'AWS Data Pipeline', isCorrect: false },
        ],
        category: 2,
      },
    ];

    // Delete any existing quiz with the same title
    await Quiz.deleteMany({ title: 'Comprehensive AWS Exam' });

    // Create new quiz
    const awsExamQuiz = await Quiz.create({
      title: 'Comprehensive AWS Exam',
      description: 'A set of questions to review essential knowledge for AWS certification.',
      price: 0,
    });

    // Add `quizId` to each question in `awsQuestions`
    const questionsWithQuizId = awsQuestions.map((question) => ({
      ...question,
      quizId: awsExamQuiz._id,
    }));

    // Insert questions
    const insertedQuestions = await Question.insertMany(questionsWithQuizId);
    console.log('Inserted AWS Exam questions:', insertedQuestions);

    // Update Quiz with questions
    await Quiz.findByIdAndUpdate(awsExamQuiz._id, {
      $push: { questions: { $each: insertedQuestions.map(q => q._id) } }
    });

    console.log('AWS Exam quiz created successfully.');
  } catch (err) {
    console.error('Error creating AWS Exam quiz:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Database disconnected');
  }
};

createAWSExam();
