# Fakemint
🍃 *Minimalist command-line tool for generating test data.*  
✅ *Quickly create simple, debug-friendly data files for testing server requests—right from your console.*



## 🔧 Installation

### Requirements

Before installing, ensure you have the following:  
- [Node.js](https://nodejs.org/) (v14.0.0 or later)  
- npm (comes with Node.js)

### Steps

1. Install the package using one of the following commands:  

   - For local use within a project:  
     ```bash
     npm install fakemint
     ```  

   - For global use across your system:  
     ```bash
     npm install -g fakemint
     ```  

2. Verify the installation (optional):  
   ```bash
   fakemint --version


## 🚀 Usage

### Interactive Menu

   - Run the following command to open an interactive menu: 
     ```bash
     
     fakemint

     ```
### OR

### Command-line Mode

   - Use the following command to generate a file with specified fields:  
   ```bash

   fakemint generate field1 field2 field3

   ```
### Example

*Input*

```bash
  fakemint generate firstName dateOfBirth email
```

*Output*
```bash
{
  "firstName": "Demarco",
  "dateOfBirth": "1964-12-12T18:07:35.108Z",
  "email": "Kari53@hotmail.com"
}
```



## Now you're ready to create structured data files quickly and effortlessly! 
