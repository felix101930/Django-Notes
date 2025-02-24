# Project README

## Backend Setup

### 1. Create a Virtual Environment and Activate It

\`\`\`bash
python -m venv venv
source venv/bin/activate # On Windows use \`venv\Scripts\activate\`
\`\`\`

### 2. Install the Required Packages

\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 3. Apply Migrations

\`\`\`bash
python manage.py migrate
\`\`\`

### 4. Run the Server

\`\`\`bash
python manage.py runserver
\`\`\`

## Frontend Setup

### 1. Navigate to the Frontend Directory

\`\`\`bash
cd Django_Notes/frontend
\`\`\`

### 2. Install the Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Start the React Application

\`\`\`bash
npm start
\`\`\`

## Usage

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to access the application.  
You can create a new note, view existing notes, and delete notes.

## API Endpoints

- **GET** \`/api/notes/\`  
  Retrieve all notes.

- **POST** \`/api/notes/\`  
  Create a new note.

- **DELETE** \`/api/notes/delete/<id>/\`  
  Delete a note by ID.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
