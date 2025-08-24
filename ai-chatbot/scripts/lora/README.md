LoRA Fine-tuning instructions (placeholder):
- This folder contains guidance and example commands to prepare data for LoRA training using Hugging Face + PEFT.
- We do NOT include any trained weights. To run fine-tuning you need a GPU environment.
- Steps:
  1. Prepare dataset in JSONL with 'prompt' and 'completion' fields.
  2. Use huggingface/transformers + peft example scripts to train.
  3. Save output and point GEMINI/adapter to the fine-tuned model path.
