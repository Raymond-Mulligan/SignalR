using System.Collections.Generic;
using Application.Profiles;

namespace Application.Activities
{
    public class ActivityDto
    {
        public ActivityDto(Guid id, DateTime date) 
        {
            this.Id = id;
    this.Date = date;
   
        }
        public Guid Id { get; set; }

        public string? Title { get; set; }

        public DateTime Date { get; set; }

        public String? Description { get; set; }

        public string? Category { get; set; }

        public string? City { get; set; }

        public string? Venue { get; set; }

        public string HostUsername {get; set;}

        public bool IsCancelled {get; set;}

        public ICollection<AttendeeDto> Attendees {get;set;}
    }
}