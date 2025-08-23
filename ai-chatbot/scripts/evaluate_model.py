from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained("models")
tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-v0.1")

pipe = pipeline("text-generation", model=model, tokenizer=tokenizer)

prompt = "Create a flashcard for teaching JavaScript arrays"
output = pipe(prompt, max_new_tokens=150)[0]["generated_text"]
print(output)