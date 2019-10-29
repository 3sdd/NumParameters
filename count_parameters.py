import torch
import torchvision
import json

#https://discuss.pytorch.org/t/how-do-i-check-the-number-of-parameters-of-a-model/4325

def count_parameters(model):
    return sum(p.numel() for p in model.parameters())

def count_trainable_parameters(model):
    return sum(p.numel() for p in model.parameters() if p.requires_grad)



if __name__=="__main__":
    model_names=["alexnet",
        #vgg
        "vgg11","vgg11_bn","vgg13","vgg13_bn","vgg16","vgg16_bn","vgg19","vgg19_bn",
        #resnet
        "resnet18","resnet34","resnet50","resnet101","resnet152",
        ]

    li=[]
    for model_name in model_names:

        model=eval("torchvision.models."+model_name)()
        
        num_parameters=count_trainable_parameters(model)
        print("model name : ",model_name)
        print("tranable parameters : {0}({1} K,{2} M)".format(num_parameters,num_parameters/1000,num_parameters/1000000))
        print()

        dic={"model_name":model_name,"num_parameters":num_parameters}
        li.append(dic)
    with open("model_parameters.json","w") as f:
        json.dump(li,f,indent=4)
        # f.write("model_name,num_parameters\n")

        # for item in li:
        #     f.write(item["model_name"]+","+str(item["num_parameters"])+"\n")

    
    