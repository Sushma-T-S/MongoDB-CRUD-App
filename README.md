# Bank Staff Management System

A simple command-line and GUI application for bank staff to manage clients and transactions.

## Features

- Add and manage bank staff members
- Add clients to staff members
- Process deposits and withdrawals
- Check account balances
- Persistent data storage using JSON
- Both command-line and GUI interfaces

## Files

- `BankStaff.py` - Contains the BankStaff class with client management methods
- `BankSystem.py` - Command-line application with menu interface
- `BankStaffGUI.py` - GUI application using tkinter
- `bank_data.json` - Data file (automatically created when running the system)
- `run_bank_system.bat` - Batch file to run the command-line version
- `run_gui.bat` - Batch file to run the GUI version

## How to Run

### Method 1: Using Batch Files (Recommended for Windows)
1. Double-click `run_bank_system.bat` to run the command-line version
2. Double-click `run_gui.bat` to run the GUI version

### Method 2: Direct Python Execution
1. Make sure you have Python installed (Python 3.6 or higher)
2. Navigate to the project directory
3. For command-line version:
   ```
   python BankSystem.py
   ```
4. For GUI version:
   ```
   python BankStaffGUI.py
   ```

## Usage

### Command-Line Version
1. When you first run the application, sample data will be created automatically
2. Use the menu options to navigate through the system
3. Add staff members and assign clients to them
4. Process transactions for clients

### GUI Version
1. When you first run the application, sample data will be created automatically
2. Use the tabs at the top to navigate between different functions:
   - Dashboard: Overview of the system
   - Staff Management: Add/delete staff members
   - Client Management: Add/delete clients
   - Transactions: Process deposits and withdrawals

## Menu Options (Command-Line Version)

### Main Menu
1. Add Staff Member - Create a new bank employee
2. View Staff Members - See all employees in the system
3. Select Staff Member - Choose an employee to perform operations
4. Exit - Close the application

### Staff Operations Menu
1. Add Client - Add a new client to the selected staff member
2. View Clients - See all clients assigned to the staff member
3. Process Deposit - Add funds to a client's account
4. Process Withdrawal - Remove funds from a client's account
5. Check Balance - View the current balance of a client's account
6. Back to Main Menu - Return to the main menu

## Data Persistence

All data is automatically saved to `bank_data.json` when changes are made. This file is loaded automatically when the application starts.