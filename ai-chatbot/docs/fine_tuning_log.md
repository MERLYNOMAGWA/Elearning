# LoRA Fine-tuning Log for DirectEd Assistant

**Model:** Mistral-7B  
**Dataset:** DirectEd Curriculum (Tutoring, Quizzes, Feedback)  
**LoRA Config:**  
- r: 8  
- alpha: 32  
- dropout: 0.1  

**Training Epochs:** 3  
**Quantization:** 4-bit NF4  
**Sample Output:**  
Prompt: "Create a quiz on Python loops"  
Response: "1. What does a 'for' loop do in Python?..."

**Next Steps:**  
- Evaluate on real student queries  
- Integrate into LangChain backend