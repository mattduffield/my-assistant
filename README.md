# My Assistant

This is a simple demonstration of how to use Gemini Nano in Google Chrome Canary or Dev.

## Sample Prompts

The following are some example prompts that you can use:

```bash
Give me a recipe for banana bread.
```

```bash
What is the capital of Oregon?
```

Here is an example of a confused reponse:

```bash
What is the capital of Washington?
```

Now, with more clarification:

```bash
What is the capital of Washington State?
```

Here is another area where the model has some problems:

```bash
Perform the following multiplication: 2x10
```

However, it can provide you with steps for mathematically formulas:

```bash
What is the circumference of a circle?
```

## Setting up a local server on Mac

To start a simple web server on Mac, enter the following:

1. **Open Terminal**:
   - Press `Command + Space`, type **Terminal**, and hit `Enter` to open it.

2. **Navigate to the folder you want to serve**:
   - Use the `cd` command to change directories to the folder you want to serve. For example:
     ```bash
     cd /path/to/your/directory
     ```

3. **Run the Python HTTP server**:
   - Run this command to start the server on port `3012`:
     ```bash
     python3 -m http.server 3012
     ```

   - If your Python version is older and doesn't use `python3`, you can try:
     ```bash
     python -m http.server 3012
     ```

This will serve the contents of the current directory on `http://localhost:3012`.


## Setting up a local server on Windows

To start a simple web server on Windows, enter the following:

1. **Open Command Prompt**:
   - Press `Windows + R`, type `cmd`, and hit `Enter`.

2. **Navigate to the folder you want to serve**:
   - Use the `cd` command to change directories. For example:
     ```bash
     cd C:\path\to\your\directory
     ```

3. **Run the Python HTTP server**:
   - Run this command to start the server on port `3012`:
     ```bash
     python3 -m http.server 3012
     ```
   - If your Python version is older and doesn't use `python3`, you can try:
     ```bash
     python -m http.server 3012
     ```

This will serve the contents of the current directory on `http://localhost:3012`.



