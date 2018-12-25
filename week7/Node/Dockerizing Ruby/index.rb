BEGIN{
    puts "This is main Ruby Program"
    print <<EOF
   This is the first way of creating
   Starts execution from "BEGIN"
   here document ie. multiple line string.
EOF
}
print <<"EOF";                # same as above
   This is the second way of creating
   Intermediate code executes here.
EOF
END{
    print <<`EOC`                 # execute commands
	echo hi there
    echo lo there
    echo "Execution" ends here "END"
EOC
}
print <<"hello", <<"hai"  # you can stack them
    I said hello.
    Intermediate code executes here.
hello
    I said hai.
    Intermediate code executes here.
hai
