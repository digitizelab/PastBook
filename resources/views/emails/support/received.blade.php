@component('mail::message')
# New Support Request Received

### Name :
{{$support->name}}
### Email :
{{$support->email}}
### Subject :
{{$support->subject}}
### Description :
{{$support->description}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
