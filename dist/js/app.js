const titleName = document.createElement("input");
titleName.textContent;
const titleNameBtn = document.createElement("button");
titleNameBtn.innerHTML = "SENDENNN";
fetch('/titlename')
    .then(response => response.json())
    .then(data => titleName.value = data.titleName);
document.body.append(titleName, titleNameBtn);
titleNameBtn.addEventListener("click", e => {
    fetch("/titlename", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titleName: titleName.value })
    }).then();
});
System.register("ComponentType", [], function (exports_1, context_1) {
    "use strict";
    var ComponentType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ComponentType = class ComponentType {
                _componentName;
                _componentProperties;
                constructor(componentName, componentProperties) {
                    this._componentName = componentName;
                    this._componentProperties = componentProperties;
                }
            };
            exports_1("ComponentType", ComponentType);
        }
    };
});
System.register("c_TitleText", ["ComponentType"], function (exports_2, context_2) {
    "use strict";
    var ComponentType_1, C_TitleText;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (ComponentType_1_1) {
                ComponentType_1 = ComponentType_1_1;
            }
        ],
        execute: function () {
            C_TitleText = class C_TitleText extends ComponentType_1.ComponentType {
                _titleInput;
                _textInput;
                _moreTitles;
                constructor() {
                    super("c_titleText", {
                        firstTitle: "",
                        firstText: "",
                        moreTitleBtn: new HTMLButtonElement(),
                    });
                    this._titleInput = new HTMLInputElement();
                    this._titleInput.type;
                }
            };
            exports_2("C_TitleText", C_TitleText);
        }
    };
});
// (async () => {
//    const postBtn: HTMLButtonElement = (document.getElementById('postBtn') as HTMLButtonElement)
//    postBtn.addEventListener('click', titlePost )
//    async function titlePost() {
//       const rawResponse = await fetch('/title', {
//          method: 'POST',
//          // headers: {
//          //    'Accept': 'application/json',
//          //    'Content-Type': 'application/json'
//          // },
//          body: JSON.stringify({ id: 1, name: 'title_name', Text_Content: "Alexander Jaroch" })
//       });
//       const content = await rawResponse.json();
//       console.log(content);
//    }
// })();
/// <reference path="test.ts" />

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cy9iYWNrZW5kUGFnZS50cyIsInNyYy90cy9Db21wb25lbnRUeXBlLnRzIiwic3JjL3RzL2NfVGl0bGVUZXh0LnRzIiwic3JjL3RzL3Rlc3QudHMiLCJzcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFNBQVMsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRSxTQUFTLENBQUMsV0FBVyxDQUFDO0FBQ3RCLE1BQU0sWUFBWSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pFLFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBR3BDLEtBQUssQ0FBQyxZQUFZLENBQUM7S0FDZixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRTlDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDeEMsS0FBSyxDQUFDLFlBQVksRUFBRTtRQUNqQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNOLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEQsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2IsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O1lDcEJILGdCQUFBLE1BQXNCLGFBQWE7Z0JBQ3RCLGNBQWMsQ0FBUztnQkFDdkIsb0JBQW9CLENBQUs7Z0JBRW5DLFlBQVksYUFBcUIsRUFBRSxtQkFBdUI7b0JBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO29CQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ25ELENBQUM7YUFDSCxDQUFBOztRQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lDTkYsY0FBQSxNQUFhLFdBQVksU0FBUSw2QkFBYTtnQkFDakMsV0FBVyxDQUFtQjtnQkFDOUIsVUFBVSxDQUFtQjtnQkFDN0IsV0FBVyxDQUFvQjtnQkFFekM7b0JBQ0csS0FBSyxDQUFDLGFBQWEsRUFBRTt3QkFDbEIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsU0FBUyxFQUFFLEVBQUU7d0JBQ2IsWUFBWSxFQUFFLElBQUksaUJBQWlCLEVBQUU7cUJBQ3ZDLENBQUMsQ0FBQTtvQkFFRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQTtvQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUE7Z0JBQ3hCLENBQUM7YUFDSCxDQUFBOztRQUFBLENBQUM7OztBQ2hCRixpQkFBaUI7QUFDakIsa0dBQWtHO0FBQ2xHLG1EQUFtRDtBQUNuRCxrQ0FBa0M7QUFDbEMsb0RBQW9EO0FBQ3BELDJCQUEyQjtBQUMzQix5QkFBeUI7QUFDekIsK0NBQStDO0FBQy9DLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsaUdBQWlHO0FBQ2pHLFlBQVk7QUFDWixrREFBa0Q7QUFFbEQsOEJBQThCO0FBQzlCLE9BQU87QUFDUCxRQUFRO0FDakJSLGdDQUFnQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZU5hbWU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbnRpdGxlTmFtZS50ZXh0Q29udGVudDtcclxuY29uc3QgdGl0bGVOYW1lQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbnRpdGxlTmFtZUJ0bi5pbm5lckhUTUwgPSBcIlNFTkRFTk5OXCI7XHJcblxyXG5cclxuZmV0Y2goJy90aXRsZW5hbWUnKVxyXG4gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgIC50aGVuKGRhdGEgPT4gdGl0bGVOYW1lLnZhbHVlID0gZGF0YS50aXRsZU5hbWUpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQodGl0bGVOYW1lLCB0aXRsZU5hbWVCdG4pO1xyXG5cclxudGl0bGVOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgZmV0Y2goXCIvdGl0bGVuYW1lXCIsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlTmFtZTogdGl0bGVOYW1lLnZhbHVlIH0pXHJcbiAgIH0pLnRoZW4oKTtcclxufSk7XHJcblxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50VHlwZSB7XHJcbiAgIHByb3RlY3RlZCBfY29tcG9uZW50TmFtZTogc3RyaW5nO1xyXG4gICBwcm90ZWN0ZWQgX2NvbXBvbmVudFByb3BlcnRpZXM6IHt9O1xyXG5cclxuICAgY29uc3RydWN0b3IoY29tcG9uZW50TmFtZTogc3RyaW5nLCBjb21wb25lbnRQcm9wZXJ0aWVzOiB7fSkge1xyXG4gICAgICB0aGlzLl9jb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZTtcclxuICAgICAgdGhpcy5fY29tcG9uZW50UHJvcGVydGllcyA9IGNvbXBvbmVudFByb3BlcnRpZXM7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tIFwiLi9Db21wb25lbnRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ19UaXRsZVRleHQgZXh0ZW5kcyBDb21wb25lbnRUeXBlIHtcclxuICAgcHJvdGVjdGVkIF90aXRsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICBwcm90ZWN0ZWQgX3RleHRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgcHJvdGVjdGVkIF9tb3JlVGl0bGVzOiBIVE1MQnV0dG9uRWxlbWVudDsgXHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoXCJjX3RpdGxlVGV4dFwiLCB7XHJcbiAgICAgICAgIGZpcnN0VGl0bGU6IFwiXCIsXHJcbiAgICAgICAgIGZpcnN0VGV4dDogXCJcIixcclxuICAgICAgICAgbW9yZVRpdGxlQnRuOiBuZXcgSFRNTEJ1dHRvbkVsZW1lbnQoKSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuX3RpdGxlSW5wdXQgPSBuZXcgSFRNTElucHV0RWxlbWVudCgpXHJcbiAgICAgIHRoaXMuX3RpdGxlSW5wdXQudHlwZSBcclxuICAgfVxyXG59IiwiXHJcbi8vIChhc3luYyAoKSA9PiB7XHJcbi8vICAgIGNvbnN0IHBvc3RCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0QnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpXHJcbi8vICAgIHBvc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aXRsZVBvc3QgKVxyXG4vLyAgICBhc3luYyBmdW5jdGlvbiB0aXRsZVBvc3QoKSB7XHJcbi8vICAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy90aXRsZScsIHtcclxuLy8gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgLy8gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAgLy8gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4vLyAgICAgICAgICAvLyB9LFxyXG4vLyAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiAxLCBuYW1lOiAndGl0bGVfbmFtZScsIFRleHRfQ29udGVudDogXCJBbGV4YW5kZXIgSmFyb2NoXCIgfSlcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4vLyAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuLy8gICAgfVxyXG4vLyB9KSgpOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0ZXN0LnRzXCIgLz5cclxuIl19
