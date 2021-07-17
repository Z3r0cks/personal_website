(async () => {
    const postBtn = document.getElementById('postBtn');
    postBtn.addEventListener('click', titlePost);
    async function titlePost() {
        const rawResponse = await fetch('/title', {
            method: 'POST',
            // headers: {
            //    'Accept': 'application/json',
            //    'Content-Type': 'application/json'
            // },
            body: JSON.stringify({ id: 1, name: 'title_name', Text_Content: "Alexander Jaroch" })
        });
        const content = await rawResponse.json();
        console.log(content);
    }
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cy90ZXN0LnRzIiwic3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNULE1BQU0sT0FBTyxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBdUIsQ0FBQTtJQUM1RixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBRSxDQUFBO0lBQzdDLEtBQUssVUFBVSxTQUFTO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN2QyxNQUFNLEVBQUUsTUFBTTtZQUNkLGFBQWE7WUFDYixtQ0FBbUM7WUFDbkMsd0NBQXdDO1lBQ3hDLEtBQUs7WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztTQUN2RixDQUFDLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUFDSixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihhc3luYyAoKSA9PiB7XHJcbiAgIGNvbnN0IHBvc3RCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0QnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpXHJcbiAgIHBvc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aXRsZVBvc3QgKVxyXG4gICBhc3luYyBmdW5jdGlvbiB0aXRsZVBvc3QoKSB7XHJcbiAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy90aXRsZScsIHtcclxuICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAgICAgICAgLy8gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgLy8gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAvLyB9LFxyXG4gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiAxLCBuYW1lOiAndGl0bGVfbmFtZScsIFRleHRfQ29udGVudDogXCJBbGV4YW5kZXIgSmFyb2NoXCIgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAgfVxyXG59KSgpOyIsIm5hbWVzcGFjZSBwZXJzb25hbF93ZWJzaXRlIHtcclxuXHJcbn0iXX0=